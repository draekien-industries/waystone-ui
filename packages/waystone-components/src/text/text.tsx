/** @jsxImportSource theme-ui */
import React from 'react';
import { Text as ThemeUiText } from 'theme-ui';
import { TextVariant } from '@waystone/core';
import { textCss } from './text.styles';
import { HasColor, HasVariant } from '../common/interfaces';

/**
 * Props for rendering the {@link Text} component.
 * @extends HasColor
 * @extends HasVariant
 */
export interface TextProps extends HasColor, HasVariant {
  /**
   * The type of element to render onto the DOM.
   * @default 'span'
   */
  as?: React.ElementType;
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
  /**
   * The components to render as children.
   */
  children: React.ReactNode;
}

/**
 * A component for rendering text onto the DOM with props for setting the text variant, color,
 * HTML element type.
 */
export const Text = ({
  children,
  as = 'span',
  inline = false,
  variant = 'body',
  color,
  ...rest
}: TextProps) => (
  <ThemeUiText sx={textCss({ inline, variant, color })} as={as} {...rest}>
    {children}
  </ThemeUiText>
);
