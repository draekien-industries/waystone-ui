import React from 'react';
import { Story, Meta } from '@storybook/react';
import { IconButton, IconButtonProps } from './iconButton';
import { Icon } from '../icon/icon';
import { Button } from '../button/button';

export default {
  title: 'Components/IconButton',
  component: IconButton,
  subcomponents: { Button, Icon },
  args: {
    icon: {
      name: 'add',
      size: 'sm',
    },
    iconPosition: 'left',
    children: 'Add',
  },
} as Meta;

const Template: Story<IconButtonProps> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
