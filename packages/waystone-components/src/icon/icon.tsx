/** @jsxImportSource theme-ui */
import React from 'react';
import { getIconClassName } from './icon.fx';
import { iconCss } from './icon.styles';

import { HasColor, HasSize, HasVariant } from '../common/interfaces';

export type IconVariant =
  | 'filled'
  | 'outlined'
  | 'round'
  | 'two-tone'
  | 'sharp';

/** The props required to generate the correct icon styles. */
export interface IconStyleProps extends HasSize, HasColor {}

/**
 * The options that can be set when rendering the icon.
 * @extends IconStyleProps
 * @extends HasVariant
 */
export interface IconOptions extends IconStyleProps, HasVariant {
  /**
   * The variant of icon to render.
   * @override
   */
  variant?: IconVariant;
}

/** Props for the icon component. */
export interface IconProps
  extends Omit<React.HTMLAttributes<HTMLElement>, 'children' | 'color'>,
    HasVariant,
    HasSize,
    HasColor {
  /** The name of the material icon to render. */
  name: string;
  /** The material icon variant to use when rendering the icon. */
  variant?: IconVariant;
}

/**
 * Renders an icon component.
 * This component library relies on the material-icons font for rendering icons.
 * You can view the list of available icons by going to https://fonts.google.com/icons
 */
export const Icon = ({
  className,
  name,
  variant = 'filled',
  size = 'md',
  color = 'inherit',
  ...rest
}: IconProps) => {
  return (
    <i
      sx={iconCss({ size, color })}
      className={getIconClassName(variant, className)}
      {...rest}>
      {name}
    </i>
  );
};
