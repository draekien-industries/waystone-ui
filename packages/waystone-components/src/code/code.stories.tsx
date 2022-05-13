import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './code';
import { Text } from '../text/text';

export default {
  title: 'Components/Code',
  component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'code',
};

export function WithExample() {
  return (
    <Text>
      This is an example of the <Code>Code</Code> component being used inside a{' '}
      <Code>Text</Code> component.
    </Text>
  );
}
