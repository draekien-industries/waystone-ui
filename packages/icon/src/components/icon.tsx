import type { ColorAttributes, VariantAttributes } from '@waystone/core';
import type { ComponentPropsWithoutRef } from 'react';

export type IconSize = 'extra-small' | 'small' | 'medium' | 'large';
export type IconVariant =
  | 'filled'
  | 'outlined'
  | 'round'
  | 'two-tone'
  | 'sharp';

export type IconProps = {
  children: string;
  size?: IconSize;
} & ColorAttributes &
  VariantAttributes<IconVariant> &
  ComponentPropsWithoutRef<'i'>;

const getFontSize = (size?: IconSize) => {
  switch (size) {
    case 'extra-small':
      return '0.5em !important';
    case 'small':
      return '1em !important';
    case 'medium':
      return '1.5em !important';
    case 'large':
      return '2em !important';
    default:
      return 'inherit';
  }
};

const getIconClassName = (variant?: IconVariant, className?: string) => {
  const trimmed = variant?.trim();

  return trimmed === 'filled'
    ? `material-icons ${className || ''}`.trim()
    : `material-icons-${trimmed} ${className || ''}`.trim();
};

export const Icon = ({
  children,
  color = 'inherit',
  size = 'small',
  variant = 'outlined',
  className,
  ...rest
}: IconProps) => {
  const fontSize = getFontSize(size);
  const iconClassName = getIconClassName(variant, className);

  return (
    <i
      className={iconClassName}
      sx={{
        verticalAlign: 'middle',
        color,
        fontSize,
      }}
      {...rest}>
      {children}
    </i>
  );
};
