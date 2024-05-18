import { Spinner } from '@waystone/spinner';
import type { Meta, StoryObj } from '@storybook/react';
import { argTypes, createEnumArgType } from '../../.storybook/preview.fx';

const meta: Meta<typeof Spinner> = {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    size: createEnumArgType({
      options: ['small', 'medium', 'large'],
      summary: 'size',
      fuzzyTypes: 'string',
    }),
    color: argTypes.color,
  },
};

export default meta;

export const Example: StoryObj<typeof meta> = {};
