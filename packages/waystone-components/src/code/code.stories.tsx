import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Code, CodeProps } from './code';
import { Text } from '../text/text';

export default {
  title: 'Components/Code',
  component: Code,
} as Meta;

const Template: Story<CodeProps> = (args) => <Code {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'code',
};

export const WithExample = () => (
  <Text>
    This is an example of the <Code>Code</Code> component being used inside a{' '}
    <Code>Text</Code> component.
  </Text>
);
