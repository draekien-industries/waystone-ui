'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input, type InputProps } from '@waystone/form-fields';
import { useState } from 'react';

const meta: Meta<typeof Input> = {
  title: 'Components/FormFields/Input',
  component: Input,
  args: {
    id: 'input-story',
    onChange: fn(),
  },
};

export default meta;

export const Uncontrolled: StoryObj<typeof meta> = {};

const ControlledInput = ({ onChange, value, ...rest }: InputProps) => {
  const [state, setState] = useState(value ?? '');

  return (
    <Input
      {...rest}
      value={state}
      onChange={(e) => {
        setState(e.currentTarget.value);
        if (onChange) onChange(e);
      }}
    />
  );
};

export const Controlled: StoryObj<typeof meta> = {
  args: {
    value: '',
  },
  render: ControlledInput,
};
