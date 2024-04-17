import type { IconProps } from '@waystone/icon';
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
import type { buttonSizes, buttonVariants } from './button.constants';

export type ButtonSize = (typeof buttonSizes)[number];

export type ButtonVariant = (typeof buttonVariants)[number];

export type ButtonProps = {
  /** The icon to render inside the button */
  icon?: { name: string } & Pick<IconProps, 'variant' | 'color' | 'size'>;
} & ComponentPropsWithoutRef<'button'> &
  LoadingAttributes &
  DisabledAttributes &
  ActiveAttributes &
  FullWidthAttributes &
  SizeAttributes<ButtonSize> &
  ColorAttributes &
  VariantAttributes<ButtonVariant>;
