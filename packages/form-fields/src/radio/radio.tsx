import type { FullWidthAttributes } from '@waystone/types';
import { type ForwardedRef, forwardRef } from 'react';
import { Flex } from 'theme-ui';
import type {
  InputAriaAttributes,
  InputCallbackAttributes,
  SharedInputAttributes,
} from '../types';
import { Label } from '../label';
import { containerCss, inputCss, labelCss } from './radio.styles';

export type RadioProps = {
  label?: string;
  checked?: boolean;
  defaultChecked?: boolean;
} & InputAriaAttributes &
  InputCallbackAttributes &
  SharedInputAttributes &
  FullWidthAttributes;

const RadioWithRef = (
  { id, label, ...rest }: RadioProps,
  ref: ForwardedRef<HTMLInputElement>
) => (
  <Flex sx={containerCss}>
    <input ref={ref} sx={inputCss} type="radio" {...rest} />
    {label && (
      <Label sx={labelCss} htmlFor={id}>
        {label}
      </Label>
    )}
  </Flex>
);

export const Radio = forwardRef(RadioWithRef);
