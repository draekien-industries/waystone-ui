import type { Meta } from '@storybook/react';
import type { ButtonProps } from '@waystone/components/src';
import { Button } from '@waystone/components/src';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

export const Primary = {
  args: {
    children: 'Button',
  } as ButtonProps,
};

export const WithIcon = {
  args: {
    children: 'Button',
    icon: { variant: 'filled', name: 'check' },
  } as ButtonProps,
};

export const IconOnly = {
  args: {
    icon: { variant: 'filled', name: 'check' },
  } as ButtonProps,
};
