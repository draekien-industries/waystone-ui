'use client';

import { alpha } from '@theme-ui/color';
import { Card } from '@waystone/card';
import { cssSelectors, outlineCss } from '@waystone/css-presets';
import { Icon } from '@waystone/icon';
import {
  SyntaxHighlighter,
  type SyntaxHighlightStyle as StyleName,
  type SupportedLanguage,
} from '@waystone/syntax-highlighter';
import type { TestIdAttributes } from '@waystone/types';
import { useState, type ReactNode } from 'react';
import { Box, type ThemeUICSSObject } from 'theme-ui';

export type CodeBlockProps = {
  code: string;
  footer?: ReactNode;
  wrapLines?: boolean;
  language?: SupportedLanguage;
  styleName?: StyleName;
} & TestIdAttributes;

const baseDecoratorCss: ThemeUICSSObject = {
  variant: 'text.small',
  letterSpacing: 1.25,
  fontWeight: 'medium',
  position: 'absolute',
  top: 0,
  backgroundColor: 'a-600',
  paddingY: 'extra-small',
  paddingX: 'small',
  textTransform: 'uppercase',
  color: 'b-50',
  boxShadow: 'small',
  borderBottomLeftRadius: 'small',
  borderBottomRightRadius: 'small',
};

export const CodeBlock = ({
  code,
  footer,
  'data-testid': testId,
  ...rest
}: CodeBlockProps) => {
  const [iconName, setIconName] = useState('content_copy');

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setIconName('done');
  };

  const handleBlur = () => {
    setIconName('content_copy');
  };

  return (
    <Card data-testid={testId}>
      <Box
        sx={{
          variant: 'text.monospace',
          position: 'relative',
        }}
      >
        {rest.language && (
          <Box
            sx={{
              top: 0,
              left: '1.5rem',
              pointerEvents: 'none',
              ...baseDecoratorCss,
            }}
          >
            {rest.language}
          </Box>
        )}
        <button
          sx={{
            ...baseDecoratorCss,
            right: '1.5rem',
            color: 'text',
            background: 'ghost',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 200ms ease',
            ...outlineCss.base,
            [cssSelectors.hover]: {
              background: 'active',
              ...outlineCss.active,
            },
            [cssSelectors.active]: {
              background: 'active',
              ...outlineCss.active,
            },
            [cssSelectors.focusVisible]: {
              background: 'active',
              ...outlineCss.focused,
            },
          }}
          type="button"
          onClick={handleCopy}
          onBlur={handleBlur}
          aria-label="copy content"
        >
          <Icon>{iconName}</Icon>
        </button>
        <SyntaxHighlighter {...rest}>{code}</SyntaxHighlighter>
        {footer && (
          <Box
            sx={{
              position: 'absolute',
              variant: 'text.caption',
              textAlign: 'center',
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: alpha('muted', 0.5),
            }}
          >
            {footer}
          </Box>
        )}
      </Box>
    </Card>
  );
};
