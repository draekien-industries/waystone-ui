/** @jsxImportSource theme-ui */
import React from 'react';
import { ThemeUIStyleObject } from 'theme-ui';
import { Label } from '../label/label';

export interface TextInputProps {
  id: string;
  ref?: React.ForwardedRef<HTMLInputElement>;
  label: string;
  required?: boolean;
}

const TextInput = ({ id, label, required, ref }: TextInputProps) => {
  const inputContainerCss: ThemeUIStyleObject = {};

  return (
    <div sx={inputContainerCss}>
      <Label htmlFor={id}>{label}</Label>
      <input ref={ref} id={id} type="text" required={required} />
    </div>
  );
};

export const TextInputWithRef = React.forwardRef<
  HTMLInputElement,
  TextInputProps
>((props, ref) => <TextInput {...props} ref={ref} />);
