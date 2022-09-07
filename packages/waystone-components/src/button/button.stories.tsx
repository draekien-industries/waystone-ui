import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonProps } from './button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: 'Button',
} as ButtonProps;

export const WithIcon = Template.bind({});

WithIcon.args = {
  children: 'Button',
  icon: { variant: 'filled', name: 'check' },
} as ButtonProps;
