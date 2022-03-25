import { Meta, Story } from '@storybook/react';
import { Anchor, AnchorProps, Text } from '@waystone/components';
import { getBooleanType } from '../utils';

export default {
  component: Anchor,
  args: {
    external: false,
  },
  argTypes: {
    children: {
      description: 'The text to render in the component',
    },
    href: {
      description: 'The link',
      control: { type: 'text' },
    },
    external: {
      description:
        'Determines whether the anchor opens the provided href in a new tab or not',
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
      type: getBooleanType(),
    },
  },
} as Meta;

export const Usage: Story<AnchorProps> = () => (
  <div>
    <Text>
      The <Anchor>Anchor</Anchor> component should be used whenever you need to
      link to another location on the page or to an external url. Usage is the
      same as the HTML{' '}
      <Anchor
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
        external>
        {'<a>'}
      </Anchor>{' '}
      element.
    </Text>
  </div>
);

export const WithExternal: Story<AnchorProps> = (args) => (
  <div>
    <Anchor {...args}>The HTML anchor element</Anchor>
    <Text variant="small">
      NOTE: when the external prop is set, rel is automatically set to
      &apos;noopener noreferrer&apos;
    </Text>
  </div>
);

WithExternal.args = {
  href: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a',
  external: true,
  rel: 'noopener noreferrer',
  target: '_blank',
};

WithExternal.argTypes = {
  rel: {
    type: 'string',
    defaultValue: 'noopener noreferrer',
    description:
      'This field is automatically set when the external prop is set. Provide a custom value to override the default.',
  },
  target: {
    type: 'string',
    defaultValue: '_blank',
    description:
      'This field is automatically set when the external prop is set. Provide a custom value to override the default.',
  },
};
