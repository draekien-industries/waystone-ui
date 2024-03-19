import type { TextVariant } from '@waystone/core';
import type { ReactNode } from 'react';
import type React from 'react';
import { Text as ThemeUiText } from 'theme-ui';
import type { HasColor, HasVariant } from '../common/interfaces';
import { textCss } from './text.styles';

/**
 * Props for rendering the {@link Text} component.
 * @extends HasColor
 * @extends HasVariant
 */
export type TextProps = {
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
   * The components to render as children.
   */
  children: ReactNode;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'color'> &
  HasColor &
  HasVariant<TextVariant>;

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
