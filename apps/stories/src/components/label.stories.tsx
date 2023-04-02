import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Label } from '@waystone/components/src';

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'Example Label',
  htmlFor: 'example-label',
};
