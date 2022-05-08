/** @jsxImportSource theme-ui */
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNight } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Icon } from '../icon/icon';
import { copy } from './codeBlock.fx';
import {
  codeBlockCaptionCss,
  codeBlockContainerCss,
  codeBlockCopyButtonCss,
  codeBlockLanguageCss,
} from './codeBlock.styles';

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
  children: string;
  /** An optional caption to describe the code block. */
  caption?: string;
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
  caption,
  children,
}: CodeBlockProps) => {
  const [iconName, setIconName] = React.useState('content_copy');

  const handleCopy = () => {
    copy(children);
    setIconName('done');
  };

  const handleBlur = () => {
    setIconName('content_copy');
  };

  return (
    <div sx={codeBlockContainerCss}>
      <div sx={codeBlockLanguageCss}>{language}</div>
      <button
        sx={codeBlockCopyButtonCss}
        type="button"
        onClick={handleCopy}
        onBlur={handleBlur}
      >
        <Icon name={iconName} />
      </button>
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
          paddingTop: '2rem',
          paddingBottom: caption ? '2.25rem' : '1.5rem',
        }}
      >
        {children}
      </SyntaxHighlighter>
      {caption && <div sx={codeBlockCaptionCss}>{caption}</div>}
    </div>
  );
};
