import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@waystone/button';

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

export const Secondary: StoryObj<typeof meta> = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};

export const Highlight: StoryObj<typeof meta> = {
  args: {
    children: 'Button',
    variant: 'highlight',
  },
};

export const Accent: StoryObj<typeof meta> = {
  args: {
    children: 'Button',
    variant: 'accent',
  },
};

export const Ghost: StoryObj<typeof meta> = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
};

export const Link: StoryObj<typeof meta> = {
  args: {
    children: 'Button',
    variant: 'link',
  },
};

export const Destructive: StoryObj<typeof meta> = {
  args: {
    children: 'Button',
    variant: 'destructive',
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
