import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '@waystone/components/src';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Example Label',
    htmlFor: 'example-label',
  },
};
