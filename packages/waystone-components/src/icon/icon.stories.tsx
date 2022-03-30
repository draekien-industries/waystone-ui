import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, IconProps, IconOptions } from './icon';



export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    variant: 'filled',
    size: 'md',
    color: 'inherit',
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'accessibility',
};
