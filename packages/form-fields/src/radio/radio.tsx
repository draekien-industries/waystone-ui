'use client';

import type { FullWidthAttributes } from '@waystone/types';
import {
  type ComponentRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ForwardedRef,
  forwardRef,
} from 'react';
import { Flex } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import { cssSelectors, outlineCss } from '@waystone/css-presets';
import type {
  CallbackAttributes,
  InputAriaAttributes,
  InputCallbackAttributes,
  SharedInputAttributes,
} from '../types';
import { Label } from '../label';

export type RadioProps = {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
} & InputAriaAttributes &
  InputCallbackAttributes &
  SharedInputAttributes &
  FullWidthAttributes;

export type RadioGroupProps = {
  options: Array<{ id: string; label: string; value: string }>;
  name: string;
  layout?: 'row' | 'column';
} & FullWidthAttributes &
  SharedInputAttributes &
  Omit<InputCallbackAttributes, 'onClick'> &
  InputAriaAttributes;

const RadioWithRef = (
  { id, label, ...rest }: RadioProps,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <Flex sx={{ gap: 'small' }}>
    <input
      ref={ref}
      sx={{
        height: '1.25rem',
        width: '1.25rem',
        cursor: 'pointer',
        [cssSelectors.disabled]: {
          cursor: 'not-allowed',
        },
      }}
      type="radio"
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

export const Radio = forwardRef(RadioWithRef);
