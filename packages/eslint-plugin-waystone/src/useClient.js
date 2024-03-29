const globals = require('globals');
const Components = require('eslint-plugin-react/lib/util/Components');
const componentUtil = require('eslint-plugin-react/lib/util/componentUtil');
const { reactEvents } = require('./reactEvents');

const resolvedByMessage =
  'Add the "use client" directive at the top of the file.';

const HOOK_REGEX = /^use[A-Z]/;
const useClientRegex = /^('|")use client('|")/;
const browserOnlyGlobals = Object.keys(globals.browser).reduce((acc, curr) => {
  if (curr in globals.browser && !(curr in globals.node)) {
    acc.add(curr);
  }
  return acc;
}, new Set());

function isFunction(def) {
  if (def.type === 'FunctionName') {
    return true;
  }
  if (def.node.init && def.node.init.type === 'ArrowFunctionExpression') {
    return true;
  }
  return false;
}

module.exports = {
  meta: {
    docs: {
      description: `Enforce components are appropriately labeled with 'use client'.`,
      recommended: true,
    },
    type: 'problem',
    hasSuggestions: true,
    fixable: 'code',
    messages: {
      addUseClientHooks: `"{{hook}}" only works in Client Components. ${resolvedByMessage}`,
      addUseClientBrowserApi: `Browser APIs only work in Client Components. ${resolvedByMessage}`,
      addUseClientCallbacks: `Functions can only be passed as props to Client Components. ${resolvedByMessage}`,
      addUseClientClassComponent: `Class Components can only be used in Client Components. ${resolvedByMessage}`,
      removeUseClient:
        'This file does not appear to require the "use client" directive, it can be safely removed.',
    },
  },

  create: Components.detect((context, _, util) => {
    let hasReported = false;
    const instances = [];
    let isClientComponent = false;
    const sourceCode = context.getSourceCode();

    let parentNode;

    function reportMissingDirective(messageId, expression, data) {
      if (isClientComponent || hasReported) {
        return;
      }
      hasReported = true;
      context.report({
        node: expression,
        messageId,
        data,
        *fix(fixer) {
          const firstToken = sourceCode.getFirstToken(parentNode.body[0]);
          if (firstToken) {
            const isFirstLine = firstToken.loc.start.line === 1;
            yield fixer.insertTextBefore(
              firstToken,
              `${isFirstLine ? '' : '\n'}'use client';\n\n`
            );
          }
        },
      });
    }

    const reactImports = {
      namespace: [],
    };

    const undeclaredReferences = new Set();

    return {
      Program(node) {
        node.body.forEach((block) => {
          if (
            block.type === 'ExpressionStatement' &&
            block.expression.type === 'Literal' &&
            block.expression.value === 'use client'
          ) {
            isClientComponent = true;
          }
        });

        parentNode = node;
        const scope = sourceCode.getScope
          ? sourceCode.getScope(node)
          : context.getScope();
        // Collect undeclared variables (ie, used global variables)
        scope.through.forEach((reference) => {
          undeclaredReferences.add(reference.identifier.name);
        });
      },

      ImportDeclaration(node) {
        if (node.source.value === 'react') {
          node.specifiers
            .filter((spec) => spec.type === 'ImportSpecifier')
            .forEach((spec) => {
              reactImports[spec.local.name] = spec.imported.name;
            });
          const namespace = node.specifiers.find(
            (spec) =>
              spec.type === 'ImportDefaultSpecifier' ||
              spec.type === 'ImportNamespaceSpecifier'
          );
          if (namespace) {
            reactImports.namespace = [
              ...reactImports.namespace,
              namespace.local.name,
            ];
          }
        }
      },
      NewExpression(node) {
        // @ts-expect-error
        const { name } = node.callee;
        if (undeclaredReferences.has(name) && browserOnlyGlobals.has(name)) {
          instances.push(name);
          reportMissingDirective('addUseClientBrowserApi', node);
        }
      },
      CallExpression(expression) {
        let name = '';
        if (
          expression.callee.type === 'Identifier' &&
          'name' in expression.callee
        ) {
          name = expression.callee.name;
        } else if (
          expression.callee.type === 'MemberExpression' &&
          'name' in expression.callee.property
        ) {
          name = expression.callee.property.name;
        }

        if (
          HOOK_REGEX.test(name) &&
          // Is in a function...
          (sourceCode.getScope
            ? sourceCode.getScope(expression)
            : context.getScope()
          ).type === 'function' &&
          // But only if that function is a component
          Boolean(util.getParentComponent(expression))
        ) {
          instances.push(name);
          reportMissingDirective('addUseClientHooks', expression.callee, {
            hook: name,
          });
        }
      },
      MemberExpression(node) {
        // Catch uses of browser APIs in module scope
        // or React component scope.
        // eg:
        // const foo = window.foo
        // window.addEventListener(() => {})
        // const Foo() {
        //   const foo = window.foo
        //   return <div />;
        // }
        // @ts-expect-error
        const { name } = node.object;
        const scopeType = (
          sourceCode.getScope ? sourceCode.getScope(node) : context.getScope()
        ).type;
        if (
          undeclaredReferences.has(name) &&
          browserOnlyGlobals.has(name) &&
          (scopeType === 'module' || !!util.getParentComponent(node))
        ) {
          instances.push(name);
          reportMissingDirective('addUseClientBrowserApi', node.object);
        }
      },
      ExpressionStatement(node) {
        const { expression } = node;
        if (!expression.callee) {
          return;
        }

        if (
          expression.callee &&
          HOOK_REGEX.test(expression.callee.name) &&
          Boolean(util.getParentComponent(expression))
        ) {
          instances.push(expression.callee.name);
          reportMissingDirective('addUseClientHooks', expression.callee, {
            hook: expression.callee.name,
          });
        }
      },
      // @ts-expect-error
      JSXOpeningElement(node) {
        const scope = sourceCode.getScope
          ? sourceCode.getScope(node)
          : context.getScope();
        const fnsInScope = [];
        scope.variables.forEach((variable) => {
          variable.defs.forEach((def) => {
            if (isFunction(def)) {
              fnsInScope.push(variable.name);
            }
          });
        });

        if (scope.upper) {
          scope.upper.set.forEach((variable) => {
            variable.defs.forEach((def) => {
              if (isFunction(def)) {
                fnsInScope.push(variable.name);
              }
            });
          });
        }

        node.attributes.forEach((attribute) => {
          if (
            attribute.type === 'JSXSpreadAttribute' ||
            (attribute.value &&
              attribute.value.type !== 'JSXExpressionContainer')
          ) {
            return;
          }

          if (reactEvents.includes(attribute.name.name)) {
            reportMissingDirective('addUseClientCallbacks', attribute.name);
          }

          if (
            attribute.value &&
            (attribute.value.expression.type === 'ArrowFunctionExpression' ||
              attribute.value.expression.type === 'FunctionExpression' ||
              (attribute.value.expression.type === 'Identifier' &&
                fnsInScope.includes(attribute.value.expression.name)))
          ) {
            reportMissingDirective('addUseClientCallbacks', attribute);
          }
        });
      },
      ClassDeclaration(node) {
        if (componentUtil.isES6Component(node, context)) {
          instances.push(node.id.name);
          reportMissingDirective('addUseClientClassComponent', node);
        }
      },

      // eslint-disable-next-line func-names
      'ExpressionStatement:exit': function (node) {
        const value = 'value' in node.expression ? node.expression.value : '';
        if (typeof value !== 'string' || !useClientRegex.test(value)) {
          return;
        }
        if (instances.length === 0 && isClientComponent) {
          context.report({
            node,
            messageId: 'removeUseClient',
            fix(fixer) {
              return fixer.remove(node);
            },
          });
        }
      },
    };
  }),
};
