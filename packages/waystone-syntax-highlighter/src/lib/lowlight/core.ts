import { Emitter } from 'highlight.js';
import high from 'highlight.js/lib/core';
import {
  Root,
  Span,
  HighlightOptions,
  HighlightSyntax,
  LowlightOptions,
  AutoOptions,
} from './core.types';

const own = {}.hasOwnProperty;

const defaultPrefix = 'hljs-';

class HastEmitter implements Emitter {
  options: HighlightOptions;

  root: Root;

  stack: [Root, ...Array<Span>];

  constructor(options: HighlightOptions) {
    this.options = options;
    this.root = {
      type: 'root',
      data: { language: null, relevance: 0 },
      children: [],
    };
    this.stack = [this.root];
  }

  addText(value: string) {
    if (value === '') return;

    const current = this.stack[this.stack.length - 1];
    const tail = current.children[current.children.length - 1];

    if (tail && tail.type === 'text') {
      tail.value += value;
    } else {
      current.children.push({ type: 'text', value });
    }
  }

  startScope(rawName: unknown) {
    this.openNode(String(rawName));
  }

  endScope() {
    this.closeNode();
  }

  // eslint-disable-next-line no-underscore-dangle
  __addSublanguage(emitter: HastEmitter, subLanguageName: string) {
    this.addSublanguage(emitter, subLanguageName);
  }

  addSublanguage(emitter: HastEmitter, subLanguageName: string) {
    const current = this.stack[this.stack.length - 1];
    const results = emitter.root.children;

    if (subLanguageName) {
      current.children.push({
        type: 'element',
        tagName: 'span',
        properties: { className: [subLanguageName] },
        children: results,
      });
    } else {
      current.children.push(...results);
    }
  }

  /**
   * @param {string} name
   */
  openNode(name: string) {
    // First “class” gets the prefix. Rest gets a repeated underscore suffix.
    // See: <https://github.com/highlightjs/highlight.js/commit/51806aa>
    // See: <https://github.com/wooorm/lowlight/issues/43>
    const className = name
      .split('.')
      .map((d, i) => (i ? d + '_'.repeat(i) : this.options.classPrefix + d));
    const current = this.stack[this.stack.length - 1];
    /** @type {Span} */
    const child: Span = {
      type: 'element',
      tagName: 'span',
      properties: { className },
      children: [],
    };

    current.children.push(child);
    this.stack.push(child);
  }

  closeNode() {
    this.stack.pop();
  }

  // eslint-disable-next-line class-methods-use-this
  finalize() {
    /** no-op */
  }

  // eslint-disable-next-line class-methods-use-this
  toHTML() {
    return '';
  }

  // eslint-disable-next-line class-methods-use-this
  addKeyword(): void {
    /** no-op */
  }

  // eslint-disable-next-line class-methods-use-this
  closeAllNodes(): void {
    /** no-op */
  }
}

function highlight(
  language: string,
  value: string,
  options: LowlightOptions | undefined = {}
) {
  let { prefix } = options;

  if (typeof language !== 'string') {
    throw new Error(`Expected 'string' form name, got '${language}'`);
  }

  if (!high.getLanguage(language)) {
    throw new Error(`Unknown language: '${language}' is not registered`);
  }

  if (typeof value !== 'string') {
    throw new Error(`Expected 'string' for value, got '${value}'`);
  }

  if (prefix === null || prefix === undefined) {
    prefix = defaultPrefix;
  }

  high.configure({ __emitter: HastEmitter, classPrefix: prefix });

  const result = high.highlight(value, { language, ignoreIllegals: true });

  high.configure({});

  // `highlight.js` seems to use this (currently) for broken grammars, so let’s
  // keep it in there just to be sure.
  /* c8 ignore next 3 */
  if (result.errorRaised) {
    throw result.errorRaised;
  }

  // eslint-disable-next-line no-underscore-dangle
  const emitter = result._emitter as HastEmitter;

  emitter.root.data.language = result.language || null;
  emitter.root.data.relevance = result.relevance;

  return emitter.root;
}

/**
 * Highlight `value` (code) and guess its programming language.
 *
 * @param {string} value
 *   Code to highlight.
 * @param {AutoOptions} [options={}]
 *   Configuration.
 * @returns {Root}
 *   A hast `Root` node.
 */
function highlightAuto(value: string, options: AutoOptions = {}): Root {
  const subset = options.subset || high.listLanguages();
  let { prefix } = options;
  let index = -1;
  /** @type {Root} */
  let result: Root = {
    type: 'root',
    data: { language: null, relevance: 0 },
    children: [],
  };

  if (prefix === null || prefix === undefined) {
    prefix = defaultPrefix;
  }

  if (typeof value !== 'string') {
    throw new Error('Expected `string` for value, got `%s`', value);
  }

  // eslint-disable-next-line no-plusplus
  while (++index < subset.length) {
    const name = subset[index];

    // eslint-disable-next-line no-continue
    if (!high.getLanguage(name)) continue;

    const current = highlight(name, value, options);

    if (current.data.relevance > result.data.relevance) result = current;
  }

  return result;
}

/**
 * Register a language.
 *
 * @param {string} language
 *   Programming language name.
 * @param {HighlightSyntax} syntax
 *   `highlight.js` language syntax.
 * @returns {void}
 */
function registerLanguage(language: string, syntax: HighlightSyntax): void {
  high.registerLanguage(language, syntax);
}

/**
 * Register aliases for already registered languages.
 *
 * @param {string|Record<string, string|Array<string>>} language
 *   Programming language name or a map of `language`s to `alias`es or `list`s
 * @param {string|Array<string>} [alias]
 *   New aliases for the programming language.
 * @returns {void}
 */
const registerAlias =
  /**
   * @type {(
   *   ((language: string, alias: string|Array<string>) => void) &
   *   ((aliases: Record<string, string|Array<string>>) => void)
   * )}
   */
  /**
   * @param {string|Record<string, string|Array<string>>} language
   * @param {string|Array<string>} [alias]
   * @returns {void}
   */
  (
    language: string | Record<string, string | Array<string>>,
    alias: string | Array<string>
  ): void => {
    if (typeof language === 'string') {
      high.registerAliases(alias, { languageName: language });
    } else {
      Object.keys(language).forEach((key) => {
        if (own.call(language, key)) {
          high.registerAliases(language[key], { languageName: key });
        }
      });
    }
  };

/**
 * Check whether an `alias` or `language` is registered.
 *
 * @param {string} aliasOrLanguage
 *   Name of a registered language or alias.
 * @returns {boolean}
 *   Whether `aliasOrlanguage` is registered.
 */
function registered(aliasOrLanguage: string): boolean {
  return Boolean(high.getLanguage(aliasOrLanguage));
}

/**
 * List registered languages.
 *
 * @returns {Array<string>}
 *   Names of registered language.
 */
function listLanguages(): Array<string> {
  return high.listLanguages();
}

export const lowlight = {
  highlight,
  highlightAuto,
  registerLanguage,
  registered,
  listLanguages,
  registerAlias,
};
