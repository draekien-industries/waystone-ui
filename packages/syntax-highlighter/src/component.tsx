import { CodeLine } from './components';
import type {
  SyntaxHighlightStyle as StyleName,
  SupportedLanguage,
} from './lib';
import { SYNTAX_HIGHLIGHT_STYLESHEETS } from './lib';
import { createCodeTree, flattenCodeTree } from './utils';

export type SyntaxHighlighterProps = {
  language?: SupportedLanguage;
  styleName?: StyleName;
  wrapLines?: boolean;
  children: string;
};

export const SyntaxHighlighter = ({
  children,
  wrapLines,
  language,
  styleName = 'defaultStyle',
}: SyntaxHighlighterProps) => {
  const style = SYNTAX_HIGHLIGHT_STYLESHEETS[styleName];
  const { children: tree } = createCodeTree({ code: children, language });
  const codeTree = flattenCodeTree({ tree });

  return (
    <pre
      sx={{
        ...style.hljs,
        paddingX: 'medium',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit',
        paddingTop: '2rem',
        paddingBottom: '2.25rem',
      }}
    >
      <code
        className={language ? `language-${language}` : undefined}
        sx={{ whiteSpace: wrapLines ? 'pre-wrap' : 'pre' }}
      >
        {codeTree.map((node, index) => (
          <CodeLine stylesheet={style} key={`code-segment-${index.toString()}`}>
            {node}
          </CodeLine>
        ))}
      </code>
    </pre>
  );
};

export default SyntaxHighlighter;
