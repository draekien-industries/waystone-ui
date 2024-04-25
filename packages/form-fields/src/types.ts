import type React from 'react';
import type { AriaAttributes, ComponentPropsWithoutRef } from 'react';

export type InputAriaAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  keyof AriaAttributes
>;

export type CallbackAttributes<T extends React.ElementType> = Pick<
  ComponentPropsWithoutRef<T>,
  'onChange' | 'onBlur' | 'onFocus' | 'onClick'
>;

export type InputCallbackAttributes = Pick<
  ComponentPropsWithoutRef<'input'>,
  'onChange' | 'onBlur' | 'onFocus' | 'onClick'
>;

export type SharedInputAttributes = {
  id: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
};
