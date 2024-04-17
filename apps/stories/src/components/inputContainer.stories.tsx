import type { Meta } from '@storybook/react';
import type { InputContainerProps } from '@waystone/components/src';
import { InputContainer } from '@waystone/components/src';
import * as React from 'react';

export default {
  title: 'Components/InputContainer',
  component: InputContainer,
} as Meta<typeof InputContainer>;

export const Default = {
  args: {
    id: 'example-input',
    label: 'Example input',
    children: <input id="example-input" />,
    helpText: 'Some very helpful text explaining what the input is for',
  } as InputContainerProps,
};

export const Required = {
  args: {
    id: 'example-input',
    label: 'Example input',
    children: <input id="example-input" />,
    helpText: 'Some very helpful text explaining what the input is for',
    required: true,
  } as InputContainerProps,
};

export const WithWidthConstraint = {
  args: {
    id: 'example-input',
    label: 'Example input',
    children: <input id="example-input" />,
    helpText: 'Some very helpful text explaining what the input is for',
    width: 'extra-large',
  } as InputContainerProps,
};
