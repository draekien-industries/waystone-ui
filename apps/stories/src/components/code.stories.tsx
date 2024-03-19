import type { Meta, StoryObj } from '@storybook/react';
import { Code, Text } from '@waystone/components/src';
import * as React from 'react';

const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'code',
  },
};

export const WithExample = () => (
  <Text>
    This is an example of the <Code>Code</Code> component being used inside a{' '}
    <Code>Text</Code> component.
  </Text>
);
