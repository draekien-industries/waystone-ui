export type Text = import('hast').Text;
export type HighlightResult = import('highlight.js').HighlightResult;
export type HighlightOptions = import('highlight.js').HLJSOptions;
export type HighlightSyntax = import('highlight.js').LanguageFn;
export type HighlightEmitter = import('highlight.js').Emitter;
export type Span = {
  type: 'element';
  tagName: 'span';
  properties: {
    className: Array<string>;
  };
  children: Array<Span | Text>;
};
export type Root = {
  type: 'root';
  data: {
    language: string | null;
    relevance: number;
  };
  children: Array<Span | Text>;
};
export type ExtraOptions = {
  /**
   * List of allowed languages, defaults to all registered languages.
   */
  subset?: Array<string>;
};
/**
 * Configuration.
 */
export type LowlightOptions = {
  /**
   * Class prefix.
   */
  prefix?: string;
};
export type AutoOptions = LowlightOptions & ExtraOptions;
