import type { Meta, StoryObj } from '@storybook/react';
import type { InputContainerProps } from '@waystone/components/src';
import { InputContainer } from '@waystone/components/src';
import * as React from 'react';

const meta: Meta<typeof InputContainer> = {
  title: 'Components/InputContainer',
  component: InputContainer,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    id: 'example-input',
    label: 'Example input',
    children: <input id="example-input" />,
    helpText: 'Some very helpful text explaining what the input is for',
  },
};

export const Required: StoryObj<typeof meta> = {
  args: {
    id: 'example-input',
    label: 'Example input',
    children: <input id="example-input" />,
    helpText: 'Some very helpful text explaining what the input is for',
    required: true,
  },
};

export const WithWidthConstraint: StoryObj<typeof meta> = {
  args: {
    id: 'example-input',
    label: 'Example input',
    children: <input id="example-input" />,
    helpText: 'Some very helpful text explaining what the input is for',
    width: 'xl',
  },
};
