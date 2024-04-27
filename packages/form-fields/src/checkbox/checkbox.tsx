'use client';

import { forwardRef, type ForwardedRef } from 'react';
import { Flex } from 'theme-ui';
import type { FullWidthAttributes } from '@waystone/types';
import { cssSelectors, outlineCss } from '@waystone/css-presets';
import { Label } from '../label';
import type {
  InputAriaAttributes,
  InputCallbackAttributes,
  SharedInputAttributes,
} from '../types';

export type CheckboxProps = {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
} & InputAriaAttributes &
  InputCallbackAttributes &
  FullWidthAttributes &
  SharedInputAttributes;

export const CheckboxContent = (
  { id, label, fullWidth, ...rest }: CheckboxProps,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <Flex
    sx={{
      display: fullWidth ? 'flex' : 'inline-flex',
      flexWrap: 'nowrap',
      gap: 'small',
      alignItems: 'center',
      justifyContent: 'flex-start',
      transition: 'outline 200ms',
      borderRadius: 'small',
      ...outlineCss.base,
      ':has(:focus-visible)': {
        ...outlineCss.focused,
      },
    }}
  >
    <input
      id={id}
      ref={ref}
      sx={{
        height: '1.25rem',
        width: '1.25rem',
        cursor: 'pointer',
        margin: 0,
        outline: 'none',
        [cssSelectors.disabled]: {
          cursor: 'not-allowed',
        },
      }}
      type="checkbox"
      {...rest}
    />
    {label && (
      <Label
        sx={{
          cursor: 'pointer',
          [cssSelectors.disabled]: {
            cursor: 'not-allowed',
          },
        }}
        htmlFor={id}
      >
        {label}
      </Label>
    )}
  </Flex>
);

export const Checkbox = forwardRef(CheckboxContent);
