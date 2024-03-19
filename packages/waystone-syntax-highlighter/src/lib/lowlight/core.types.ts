import type { Text as HastText } from 'hast';
import type {
  HighlightResult as HlResult,
  HLJSOptions,
  LanguageFn,
  Emitter,
} from 'highlight.js';

export type Text = HastText;
export type HighlightResult = HlResult;
export type HighlightOptions = HLJSOptions;
export type HighlightSyntax = LanguageFn;
export type HighlightEmitter = Emitter;
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
