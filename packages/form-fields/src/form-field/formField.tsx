import type { PropsWithChildren } from 'react';
import { Flex } from 'theme-ui';
import { Input } from '../input';
import { Label } from '../label';
import { Checkbox } from '../checkbox';

export const FormField = ({ children }: PropsWithChildren) => {
  <Flex
    sx={{
      flexFlow: 'column',
    }}
  >
    {children}
  </Flex>;
};

FormField.Input = Input;
FormField.Checkbox = Checkbox;
FormField.Label = Label;

export default FormField;
