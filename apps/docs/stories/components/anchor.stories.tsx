import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Anchor, AnchorProps } from '@waystone/components';
import { getBooleanType } from '../utils';

export default {
  title: 'Components/Anchor',
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

const Template: Story<AnchorProps> = (args) => <Anchor {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: "I'm an anchor component. Use me inside your link wrappers.",
};
