import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, IconProps, IconOptions } from '../../';

const iconOptionsDetails = `
{ 
  variant: 'filled | outlined | round | two-tone | sharp',
  size: 'sm | md | lg',
  color: 'ThemeColor'
}
`;

export default {
  component: Icon,
  args: {
    options: { variant: 'filled', size: 'md', color: 'inherit' } as IconOptions,
  },
  argTypes: {
    options: {
      table: {
        type: {
          detail: iconOptionsDetails,
        },
      },
    },
  },
} as Meta;

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: 'accessibility',
};
