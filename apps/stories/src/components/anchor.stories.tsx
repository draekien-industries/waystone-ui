import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Anchor } from '@waystone/components/src';

export default {
  title: 'Components/Anchor',
  component: Anchor,
  args: {
    external: false,
  },
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => (
  <Anchor {...args} onClick={action('clicked')} />
);

export const Default = Template.bind({});

Default.args = {
  children: 'Anchor',
};

export const WithExternal = Template.bind({});

WithExternal.parameters = {
  docs: {
    description: {
      story:
        'Indicates the provided `href` is a link to an external resource. Automatically adds `_blank` to the `target` prop and `"noopener noreferrer"` to the `rel` prop.',
    },
  },
};

WithExternal.args = {
  href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a',
  external: true,
  children: 'Then <a> element',
};
