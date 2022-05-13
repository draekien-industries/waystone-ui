import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Spinner } from './spinner';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  args: {
    size: 'md',
    color: 'accent',
    fullWidth: false,
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Default = Template.bind({});
