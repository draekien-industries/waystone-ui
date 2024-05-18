import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from '@waystone/anchor';

const meta: Meta<typeof Anchor.Absolute> = {
  title: 'Components/Anchor/Absolute',
  component: Anchor.Absolute,
};

export default meta;

export const Internal: StoryObj<typeof meta> = {
  args: {
    children: 'Anchor',
  },
};
