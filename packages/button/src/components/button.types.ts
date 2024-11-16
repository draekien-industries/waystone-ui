import type { IconProps } from '@waystone/icon';
import type {
  ActiveAttributes,
  ColorAttributes,
  DisabledAttributes,
  FullWidthAttributes,
  LoadingAttributes,
  Prettify,
  SizeAttributes,
  VariantAttributes,
} from '@waystone/types';
import type { ComponentPropsWithoutRef } from 'react';
import type { buttonSizes, buttonVariants } from './button.constants';

export type ButtonSize = (typeof buttonSizes)[number];

export type ButtonVariant = (typeof buttonVariants)[number];

type ButtonIconProps = Prettify<
  { name: string } & Pick<IconProps, 'variant' | 'color' | 'size'>
>;

type BaseButtonProps = ComponentPropsWithoutRef<'button'>;

type WaystoneButtonProps = {
  /** The icon to render inside the button */
  icon?: ButtonIconProps;
} & LoadingAttributes &
  DisabledAttributes &
  ActiveAttributes &
  FullWidthAttributes &
  SizeAttributes<ButtonSize> &
  ColorAttributes &
  VariantAttributes<ButtonVariant>;

export type ButtonProps = Prettify<WaystoneButtonProps> & BaseButtonProps;
