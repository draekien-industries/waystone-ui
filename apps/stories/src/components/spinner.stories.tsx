import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Spinner } from '@waystone/components/src';

export default {
  title: 'Components/Spinner',
  component: Spinner,
  args: {
    size: 'md',
    color: 'accent',
    fullWidth: false,
  },
} as Meta<typeof Spinner>;

export const Default = {};
