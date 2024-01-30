'use client';

import {
  StyleName,
  SupportedLanguage,
  SyntaxHighlighter,
} from '@waystone/syntax-highlighter';
import { useState } from 'react';
import { Icon } from '../icon/icon';
import { copy } from './codeBlock.fx';
import {
  codeBlockCaptionCss,
  codeBlockContainerCss,
  codeBlockCopyButtonCss,
  codeBlockLanguageCss,
} from './codeBlock.styles';

export type CodeBlockProps = {
  /**
   * A flag indicating whether the code block should wrap long lines.
   * @default false
   */
  wordWrap?: boolean;
  /**
   * The text to render as code.
   */
  children: string;
  /** An optional caption to describe the code block. */
  caption?: string;

  /** The code language to use for syntax highlighting. */
  language?: SupportedLanguage;

  /** The name of the syntax highlighting style to use */
  styleName?: StyleName;
};

/**
 * Renders a code block that supports syntax highlighting using HLJS.
 * Refer to https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/HEAD/AVAILABLE_LANGUAGES_HLJS.MD
 * for the list of available languages.
 * @param props.language - the language of the code inside the codeblock. Used for syntax highlighting.
 * @param props.wordWrap - a flag indicating whether the code block should wrap long lines.
 * @param props.caption - an optional caption to describe the code block.
 * @param props.children - the code to render.
 * @returns a code block component.
 */
export const CodeBlock = ({
  language,
  wordWrap = false,
  caption,
  children,
  styleName = 'tomorrowNightBlue',
}: CodeBlockProps) => {
  const [iconName, setIconName] = useState('content_copy');

  const handleCopy = () => {
    copy(children);
    setIconName('done');
  };

  const handleBlur = () => {
    setIconName('content_copy');
  };

  return (
    <div sx={codeBlockContainerCss}>
      {language && <div sx={codeBlockLanguageCss}>{language}</div>}
      <button
        sx={codeBlockCopyButtonCss}
        type="button"
        onClick={handleCopy}
        onBlur={handleBlur}
      >
        <Icon name={iconName} />
      </button>
      <SyntaxHighlighter
        wrapLines={wordWrap}
        language={language}
        styleName={styleName}
      >
        {children}
      </SyntaxHighlighter>
      {caption && <div sx={codeBlockCaptionCss}>{caption}</div>}
    </div>
  );
};
