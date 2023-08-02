import { useMemo } from 'react';
import { lowlight } from 'lowlight';
import { Span } from 'lowlight/lib/core';
import { Box } from 'theme-ui';
import { SupportedLanguage } from './lib/supportedLanguages.generated';
import * as styles from './lib/styles';

export type SyntaxHighlighterProps = {
  language?: SupportedLanguage;
  styleName: keyof typeof styles;
  wrapLines: boolean;
  children: string;
};

type Tree = ReturnType<typeof lowlight.highlight>['children'];
type Node = Tree[0];

type FlattenCodeTreeOptions = {
  tree: Tree;
  className?: string[];
  newTree?: Tree;
};

type CreateLineElementOptions = {
  children: Tree;
  className: string[];
};

const createLineElement = ({
  children,
  className,
}: CreateLineElementOptions): Span => {
  const properties = {
    className,
  };

  return {
    type: 'element',
    tagName: 'span',
    properties,
    children,
  };
};

type CreateElementOptions = {
  node: Node;
  stylesheet: (typeof styles)[keyof typeof styles];
  key: string;
};

const powerSetPermutations = (arr: string[]) => {
  const arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1) return arr;
  if (arrLength === 2) {
    // prettier-ignore
    return [
      arr[0],
      arr[1],
      `${arr[0]}.${arr[1]}`,
      `${arr[1]}.${arr[0]}`
    ];
  }
  if (arrLength === 3) {
    return [
      arr[0],
      arr[1],
      arr[2],
      `${arr[0]}.${arr[1]}`,
      `${arr[0]}.${arr[2]}`,
      `${arr[1]}.${arr[0]}`,
      `${arr[1]}.${arr[2]}`,
      `${arr[2]}.${arr[0]}`,
      `${arr[2]}.${arr[1]}`,
      `${arr[0]}.${arr[1]}.${arr[2]}`,
      `${arr[0]}.${arr[2]}.${arr[1]}`,
      `${arr[1]}.${arr[0]}.${arr[2]}`,
      `${arr[1]}.${arr[2]}.${arr[0]}`,
      `${arr[2]}.${arr[0]}.${arr[1]}`,
      `${arr[2]}.${arr[1]}.${arr[0]}`,
    ];
  }
  if (arrLength >= 4) {
    // Currently does not support more than 4 extra
    // class names (after `.token` has been removed)
    return [
      arr[0],
      arr[1],
      arr[2],
      arr[3],
      `${arr[0]}.${arr[1]}`,
      `${arr[0]}.${arr[2]}`,
      `${arr[0]}.${arr[3]}`,
      `${arr[1]}.${arr[0]}`,
      `${arr[1]}.${arr[2]}`,
      `${arr[1]}.${arr[3]}`,
      `${arr[2]}.${arr[0]}`,
      `${arr[2]}.${arr[1]}`,
      `${arr[2]}.${arr[3]}`,
      `${arr[3]}.${arr[0]}`,
      `${arr[3]}.${arr[1]}`,
      `${arr[3]}.${arr[2]}`,
      `${arr[0]}.${arr[1]}.${arr[2]}`,
      `${arr[0]}.${arr[1]}.${arr[3]}`,
      `${arr[0]}.${arr[2]}.${arr[1]}`,
      `${arr[0]}.${arr[2]}.${arr[3]}`,
      `${arr[0]}.${arr[3]}.${arr[1]}`,
      `${arr[0]}.${arr[3]}.${arr[2]}`,
      `${arr[1]}.${arr[0]}.${arr[2]}`,
      `${arr[1]}.${arr[0]}.${arr[3]}`,
      `${arr[1]}.${arr[2]}.${arr[0]}`,
      `${arr[1]}.${arr[2]}.${arr[3]}`,
      `${arr[1]}.${arr[3]}.${arr[0]}`,
      `${arr[1]}.${arr[3]}.${arr[2]}`,
      `${arr[2]}.${arr[0]}.${arr[1]}`,
      `${arr[2]}.${arr[0]}.${arr[3]}`,
      `${arr[2]}.${arr[1]}.${arr[0]}`,
      `${arr[2]}.${arr[1]}.${arr[3]}`,
      `${arr[2]}.${arr[3]}.${arr[0]}`,
      `${arr[2]}.${arr[3]}.${arr[1]}`,
      `${arr[3]}.${arr[0]}.${arr[1]}`,
      `${arr[3]}.${arr[0]}.${arr[2]}`,
      `${arr[3]}.${arr[1]}.${arr[0]}`,
      `${arr[3]}.${arr[1]}.${arr[2]}`,
      `${arr[3]}.${arr[2]}.${arr[0]}`,
      `${arr[3]}.${arr[2]}.${arr[1]}`,
      `${arr[0]}.${arr[1]}.${arr[2]}.${arr[3]}`,
      `${arr[0]}.${arr[1]}.${arr[3]}.${arr[2]}`,
      `${arr[0]}.${arr[2]}.${arr[1]}.${arr[3]}`,
      `${arr[0]}.${arr[2]}.${arr[3]}.${arr[1]}`,
      `${arr[0]}.${arr[3]}.${arr[1]}.${arr[2]}`,
      `${arr[0]}.${arr[3]}.${arr[2]}.${arr[1]}`,
      `${arr[1]}.${arr[0]}.${arr[2]}.${arr[3]}`,
      `${arr[1]}.${arr[0]}.${arr[3]}.${arr[2]}`,
      `${arr[1]}.${arr[2]}.${arr[0]}.${arr[3]}`,
      `${arr[1]}.${arr[2]}.${arr[3]}.${arr[0]}`,
      `${arr[1]}.${arr[3]}.${arr[0]}.${arr[2]}`,
      `${arr[1]}.${arr[3]}.${arr[2]}.${arr[0]}`,
      `${arr[2]}.${arr[0]}.${arr[1]}.${arr[3]}`,
      `${arr[2]}.${arr[0]}.${arr[3]}.${arr[1]}`,
      `${arr[2]}.${arr[1]}.${arr[0]}.${arr[3]}`,
      `${arr[2]}.${arr[1]}.${arr[3]}.${arr[0]}`,
      `${arr[2]}.${arr[3]}.${arr[0]}.${arr[1]}`,
      `${arr[2]}.${arr[3]}.${arr[1]}.${arr[0]}`,
      `${arr[3]}.${arr[0]}.${arr[1]}.${arr[2]}`,
      `${arr[3]}.${arr[0]}.${arr[2]}.${arr[1]}`,
      `${arr[3]}.${arr[1]}.${arr[0]}.${arr[2]}`,
      `${arr[3]}.${arr[1]}.${arr[2]}.${arr[0]}`,
      `${arr[3]}.${arr[2]}.${arr[0]}.${arr[1]}`,
      `${arr[3]}.${arr[2]}.${arr[1]}.${arr[0]}`,
    ];
  }

  return [];
};

const classNameCombinations: Record<string, string[]> = {};

const getClassNameCombinations = (classNames: string[]) => {
  if (classNames.length === 0 || classNames.length === 1) return classNames;
  const key = classNames.join('.');
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = powerSetPermutations(classNames);
  }
  return classNameCombinations[key];
};

const createStyleObject = (
  classNames: string[],
  stylesheet: (typeof styles)[keyof typeof styles]
) => {
  const nonTokenClassNames = classNames.filter(
    (className) => className !== 'token'
  );
  const classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(
    (styleObject, className) => ({
      ...styleObject,
      ...stylesheet[className as keyof typeof stylesheet],
    }),
    {}
  );
};

const createElement = ({ node, stylesheet, key }: CreateElementOptions) => {
  const createChildren = () => {
    let count = 0;
    return (children: Tree) => {
      count += 1;
      return children.map((child, i) =>
        createElement({
          node: child,
          stylesheet,
          key: `code-segment-${count}-${i}`,
        })
      );
    };
  };

  if (node.type === 'text') {
    return node.value;
  }

  const allStylesheetSelectors = Object.keys(stylesheet).reduce(
    (classes, selector) => {
      selector.split('.').forEach((className) => {
        if (!classes.includes(className)) {
          classes.concat(className);
        }
      });

      return classes;
    }
  );

  const { properties } = node;

  const startingClassName =
    properties.className && properties.className.includes('token')
      ? ['token']
      : [];

  const className =
    properties.className &&
    startingClassName.concat(
      properties.className.filter(
        (cname) => !allStylesheetSelectors.includes(cname)
      )
    );

  const props = {
    ...properties,
    className: className.join(' ') || undefined,
    style: createStyleObject(properties.className, stylesheet),
  };

  const children = createChildren();

  if (node.tagName) {
    return (
      <Box as={node.tagName} key={key} {...props}>
        {children(node.children)}
      </Box>
    );
  }

  return null;
};

const flattenCodeTree = ({
  tree,
  className = [],
  newTree = [],
}: FlattenCodeTreeOptions) => {
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];

    if (node.type === 'text') {
      newTree.push(
        createLineElement({
          children: [node],
          className: [...new Set(className)],
        })
      );
    } else if (node.children) {
      const classNames = className.concat(node.properties.className);

      const codeTree = flattenCodeTree({
        tree: node.children,
        className: classNames,
      });

      codeTree.forEach((n) => newTree.push(n));
    }
  }

  return newTree;
};

export const SyntaxHighlighter = ({
  language,
  styleName,
  wrapLines,
  children,
}: SyntaxHighlighterProps) => {
  // eslint-disable-next-line import/namespace
  const css = styles[styleName];

  const codeTree = useMemo(() => {
    const tree =
      language && lowlight.listLanguages().includes(language)
        ? lowlight.highlight(language, children)
        : lowlight.highlightAuto(children);

    return flattenCodeTree({ tree: tree.children });
  }, [children, language]);

  return (
    <pre
      sx={{
        ...css.hljs,
        backgroundColor: 'transparent',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit',
        paddingTop: '2rem',
        paddingBottom: '2.25rem',
      }}
    >
      <code
        className={language ? `language-${language}` : undefined}
        style={{ whiteSpace: wrapLines ? 'pre-wrap' : 'pre' }}
      >
        {codeTree.map((node, index) =>
          createElement({
            node,
            stylesheet: css,
            key: `code-segment-${index}`,
          })
        )}
      </code>
    </pre>
  );
};
