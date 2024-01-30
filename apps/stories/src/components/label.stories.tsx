import { Meta } from '@storybook/react';
import { Label } from '@waystone/components/src';

export default {
  title: 'Components/Label',
  component: Label,
} as Meta<typeof Label>;

export const Default = {
  args: {
    children: 'Example Label',
    htmlFor: 'example-label',
  },
};
