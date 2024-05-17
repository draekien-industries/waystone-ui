import type { FullWidthAttributes, WidthAttributes } from '@waystone/types';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
} from 'react';
import { inputCss } from './input.styles';

export type InputProps = {
  /** The ID of the input */
  id: string;
} & ComponentPropsWithoutRef<'input'> &
  FullWidthAttributes &
  WidthAttributes;

const InputWithRef = (
  { fullWidth, width, minWidth, maxWidth, ...rest }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <input
    ref={ref}
    {...rest}
    sx={inputCss({ fullWidth, width, minWidth, maxWidth })}
  />
);

export const Input = forwardRef(InputWithRef);
