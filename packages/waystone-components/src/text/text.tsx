/** @jsxImportSource theme-ui */
import React from 'react';
import { Text as ThemeUiText, BoxProps } from 'theme-ui';
import { TextVariant } from '@waystone/core';
import { textCss } from './text.styles';
import { HasColor } from '../common/interfaces';

/**
 * Props for rendering the {@link Text} component.
 * @extends React.HTMLAttributes<HTMLDivElement>
 * @extends BoxProps
 */
export interface TextProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    Omit<BoxProps, 'color'>,
    HasColor {
  /**
   * Should the text component take up the full width
   * of it's parent container?
   * @default false
   */
  inline?: boolean;
  /**
   * The text variant to render.
   * @override
   * @default 'body'
   */
  variant?: TextVariant;
}

/**
 * Renders a text component.
 * @param props - {@link TextProps}
 * @returns The text component
 */
export const Text: React.FC<TextProps> = ({
  children,
  inline = false,
  variant = 'body',
  color,
  ...rest
}) => (
  <ThemeUiText sx={textCss({ inline, variant, color })} {...rest}>
    {children}
  </ThemeUiText>
);
