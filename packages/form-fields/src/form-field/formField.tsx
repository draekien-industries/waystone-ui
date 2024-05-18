import type { PropsWithChildren, ReactNode } from 'react';
import { Flex } from 'theme-ui';
import { Input } from '../input';
import { Radio } from '../radio';
import { Label } from '../label';
import { Checkbox } from '../checkbox';
import { formFieldCss } from './formField.styles';

export type FormFieldProps = {
  children: ReactNode;
};

export const FormField = ({ children }: FormFieldProps) => (
  <Flex sx={formFieldCss}>{children}</Flex>
);

FormField.Input = Input;
FormField.Radio = Radio;
FormField.Label = Label;
FormField.Checkbox = Checkbox;
