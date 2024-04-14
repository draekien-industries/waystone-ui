import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from '@waystone/anchor';

const meta: Meta<typeof Anchor.Relative> = {
  title: 'Components/Anchor/Relative',
  component: Anchor.Relative,
};

export default meta;

export const Internal: StoryObj<typeof meta> = {
  args: {
    children: 'Anchor',
  },
};
