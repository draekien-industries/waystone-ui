import type { Meta, StoryObj } from '@storybook/react';
import { Anchor } from '@waystone/components/src';

const meta: Meta<typeof Anchor> = {
  title: 'Components/Anchor',
  component: Anchor,
};

export default meta;

export const Internal: StoryObj<typeof meta> = {
  args: {
    children: 'Anchor',
  },
};

export const External: StoryObj<typeof meta> = {
  args: {
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a',
    external: true,
    children: 'Then <a> element',
  },
};
