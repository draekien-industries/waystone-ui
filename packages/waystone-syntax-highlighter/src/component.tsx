'use client';

import { CodeLine } from './components';
import { useCodeTree } from './hooks';
import type { StyleName, SupportedLanguage } from './lib';
import { styles } from './lib';

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
  const style = styles[styleName];

  const codeTree = useCodeTree({
    code: children,
    language,
  });

  return (
    <pre
      sx={{
        ...style.hljs,
        paddingX: 'md',
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
