import { Meta } from '@storybook/react';
import { Code, Text } from '@waystone/components/src';
import * as React from 'react';

export default {
  title: 'Components/Code',
  component: Code,
} as Meta<typeof Code>;

export const Default = {
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
