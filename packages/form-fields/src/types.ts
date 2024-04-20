import type { AriaAttributes, ComponentPropsWithoutRef } from 'react';

export type InputAriaAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  keyof AriaAttributes
>;

export type InputCallbackAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  'onChange' | 'onBlur' | 'onFocus' | 'onClick'
>;

export type ButtonCallbackAttributes = Pick<
  ComponentPropsWithoutRef<'button'>,
  'onChange' | 'onBlur' | 'onFocus' | 'onClick'
>;
