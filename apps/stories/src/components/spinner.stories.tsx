import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '@waystone/components/src';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  args: {
    size: 'md',
    color: 'accent',
    fullWidth: false,
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};
