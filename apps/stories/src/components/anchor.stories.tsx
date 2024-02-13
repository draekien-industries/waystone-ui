'use client';

import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Anchor } from '@waystone/components/src';

export default {
  component: Anchor,
  args: {
    external: false,
  },
} as Meta<typeof Anchor>;

const Template: StoryFn<typeof Anchor> = (args) => (
  <Anchor {...args} onClick={action('clicked')} />
);

export const Default = {
  render: Template,

  args: {
    children: 'Anchor',
  },
};

export const WithExternal = {
  render: Template,

  parameters: {
    docs: {
      description: {
        story:
          'Indicates the provided `href` is a link to an external resource. Automatically adds `_blank` to the `target` prop and `"noopener noreferrer"` to the `rel` prop.',
      },
    },
  },

  args: {
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a',
    external: true,
    children: 'Then <a> element',
  },
};
