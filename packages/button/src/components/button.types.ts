import type { IconProps } from '@waystone/icon';
import type { ThemeSize } from '@waystone/theme';
import type {
  LoadingAttributes,
  DisabledAttributes,
  ActiveAttributes,
  FullWidthAttributes,
  SizeAttributes,
  ColorAttributes,
  VariantAttributes,
} from '@waystone/types';
import type { ComponentPropsWithoutRef } from 'react';

export type ButtonSize = Extract<ThemeSize, 'sm' | 'md' | 'lg'>;

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'highlight'
  | 'accent'
  | 'link'
  | 'ghost'
  | 'destructive';

export type ButtonProps = {
  icon?: { name: string } & Pick<IconProps, 'variant' | 'color' | 'size'>;
} & ComponentPropsWithoutRef<'button'> &
  LoadingAttributes &
  DisabledAttributes &
  ActiveAttributes &
  FullWidthAttributes &
  SizeAttributes<ButtonSize> &
  ColorAttributes &
  VariantAttributes<ButtonVariant>;
