import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
} from 'react';

export type InputProps = {
  /** The ID of the input */
  id: string;
} & ComponentPropsWithoutRef<'input'>;

const renderInput = (
  props: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => <input ref={ref} {...props} />;

export const Input = forwardRef(renderInput);
