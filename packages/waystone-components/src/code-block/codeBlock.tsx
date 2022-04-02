/** @jsxImportSource theme-ui */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { codeBlockContainerCss } from './codeBlock.styles';

export interface CodeBlockProps {
  /**
   * The code language to use for syntax highlighting.
   * @default 'text'
   * @see https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD
   */
  language?: string;
  /**
   * A flag indicating whether the code block should wrap long lines.
   * @default false
   */
  wordWrap?: boolean;
  /**
   * A flag indicating whether the code block should hide line numbers.
   * @default false
   */
  hideLineNumbers?: boolean;
  /**
   * The text to render as code.
   */
  children: React.ReactNode;
}

/**
 * Renders a code block that supports syntax highlighting using HLJS.
 * Refer to https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD
 * for the list of available languages.
 */
export const CodeBlock = ({
  language = 'text',
  wordWrap = false,
  hideLineNumbers = false,
  children,
}: CodeBlockProps) => (
  <div sx={codeBlockContainerCss}>
    <SyntaxHighlighter
      wrapLongLines={wordWrap}
      showLineNumbers={!hideLineNumbers}
      language={language}
      style={tomorrowNight}
      customStyle={{
        backgroundColor: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        lineHeight: 'inherit',
      }}
    >
      {children}
    </SyntaxHighlighter>
  </div>
);
