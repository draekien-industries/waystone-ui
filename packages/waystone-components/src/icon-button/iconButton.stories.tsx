import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IconButton } from './iconButton';
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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
