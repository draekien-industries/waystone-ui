import type { ColorAttributes, VariantAttributes } from '@waystone/types';
import type { ThemeFontVariants } from '@waystone/theme';
import type { ComponentProps, ElementType } from 'react';
import { Text as ThemeUIText } from 'theme-ui';

export const textVariants = [
  'hero',
  'heading',
  'title',
  'subtitle',
  'eyebrow',
  'body',
  'caption',
  'small',
  'monospace',
] as const satisfies Array<ThemeFontVariants>;

export type TextProps<TAs extends ElementType> = {
  as?: TAs;
  inline?: boolean;
} & VariantAttributes<ThemeFontVariants> &
  ColorAttributes &
  Omit<ComponentProps<TAs>, 'color'>;

export const Text = <TAs extends ElementType>({
  children,
  inline,
  variant,
  color,
  ...rest
}: TextProps<TAs>) => (
  <ThemeUIText
    sx={{
      display: inline ? 'inline-block' : 'block',
      variant: `text.${variant}`,
      color: color || 'inherit',
      margin: inline ? 0 : undefined,
    }}
    {...rest}>
    {children}
  </ThemeUIText>
);
