import { alpha } from '@theme-ui/color';
import { cssSelectors, outlineCss } from '@waystone/css-presets';
import type { FullWidthAttributes, WidthAttributes } from '@waystone/types';
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ForwardedRef,
} from 'react';

export type InputProps = {
  /** The ID of the input */
  id: string;
} & ComponentPropsWithoutRef<'input'> &
  FullWidthAttributes &
  WidthAttributes;

const renderInput = (
  { fullWidth, width, minWidth, maxWidth, ...rest }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <input
    ref={ref}
    {...rest}
    sx={{
      borderRadius: 'small',
      border: '1px solid',
      borderColor: 'b-400',
      padding: 'extra-small',
      variant: 'text.body',
      color: 'text',
      width: fullWidth ? '100%' : width,
      minWidth,
      maxWidth,
      backgroundColor: alpha('ghost', 0.5),
      ...outlineCss.base,
      [cssSelectors.focusVisible]: {
        ...outlineCss.focused,
      },
      [cssSelectors.active]: {
        ...outlineCss.active,
      },
    }}
  />
);

export const Input = forwardRef(renderInput);
