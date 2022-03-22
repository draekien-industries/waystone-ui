/** @jsxImportSource theme-ui */
import React, { FC } from 'react';
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
   * Should the text component place itself on the same line
   * as the preceeding component (if possible).
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
 * @returns The text component
 */
export const Text: FC<TextProps> = ({
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
