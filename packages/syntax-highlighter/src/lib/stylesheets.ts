import type { SyntaxHighlightStyle } from './highlightStyles.generated';
import type * as styles from './styles';

export type SyntaxHighlightStyleSheet = (typeof styles)[SyntaxHighlightStyle];

export * as SYNTAX_HIGHLIGHT_STYLESHEETS from './styles';
