import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@waystone/components/src';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
};

export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: {
    children: 'Button',
  },
};

export const WithIcon: StoryObj<typeof meta> = {
  args: {
    children: 'Button',
    icon: { variant: 'filled', name: 'check' },
  },
};

export const IconOnly: StoryObj<typeof meta> = {
  args: {
    icon: { variant: 'filled', name: 'check' },
  },
};
