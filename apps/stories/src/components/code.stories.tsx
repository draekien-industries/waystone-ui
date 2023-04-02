import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code, Text } from '@waystone/components/src';

export default {
  title: 'Components/Code',
  component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

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