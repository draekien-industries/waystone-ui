import type { PropsWithChildren } from 'react';
import { Flex } from 'theme-ui';
import { Input } from '../input';
import { Label } from '../label';
import { Checkbox } from '../checkbox';
import { RadioGroup } from '../radio';

export const FormField = ({ children }: PropsWithChildren) => {
  <Flex
    sx={{
      flexFlow: 'column',
    }}>
    {children}
  </Flex>;
};

FormField.Input = Input;
FormField.Checkbox = Checkbox;
FormField.RadioGroup = RadioGroup;
FormField.Label = Label;

export default FormField;
