import type { Meta } from '@storybook/react';
import { Spinner } from '@waystone/components/src';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  args: {
    size: 'medium',
    color: 'accent',
    fullWidth: false,
  },
} as Meta<typeof Spinner>;

export const Default = {};
