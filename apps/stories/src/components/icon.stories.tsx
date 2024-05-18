import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from '@waystone/icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'accessibility',
  },
};
