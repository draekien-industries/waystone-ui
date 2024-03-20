import type React from 'react';
import type { FuzzyStringLiteral } from '@waystone/utils';
import type { HasColor, HasSize, HasVariant } from '../common/interfaces';
import { getIconClassName } from './icon.fx';
import { iconCss } from './icon.styles';
import type {
  IconStyleProps,
  IconVariant,
  MaterialIconName,
} from './icon.types';

/**
 * The options that can be set when rendering the icon.
 * @extends IconStyleProps
 * @extends HasVariant
 */
export type IconOptions = IconStyleProps & HasVariant<IconVariant>;

/** Props for the icon component. */
export type IconProps = {
  /** The name of the material icon to render. */
  name: FuzzyStringLiteral<MaterialIconName>;
} & Omit<React.HTMLAttributes<HTMLElement>, 'children' | 'color'> &
  HasVariant<IconVariant> &
  HasSize &
  HasColor;

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
}: IconProps) => (
  <i
    sx={iconCss({ size, color })}
    className={getIconClassName(variant, className)}
    {...rest}
  >
    {name}
  </i>
);
