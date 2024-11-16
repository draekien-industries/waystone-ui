import type {
  ColorAttributes,
  Prettify,
  VariantAttributes,
} from '@waystone/types';
import type { ComponentPropsWithoutRef } from 'react';

export type IconSize = 'extra-small' | 'small' | 'medium' | 'large';
export type IconVariant =
  | 'filled'
  | 'outlined'
  | 'round'
  | 'two-tone'
  | 'sharp';

export type IconProps = Prettify<
  {
    children: string;
    size?: IconSize;
  } & ColorAttributes &
    VariantAttributes<IconVariant>
> &
  ComponentPropsWithoutRef<'i'>;
