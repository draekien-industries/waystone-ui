import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@waystone/components/src';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  args: {
    variant: 'filled',
    size: 'md',
    color: 'inherit',
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    name: 'accessibility',
  },
};
