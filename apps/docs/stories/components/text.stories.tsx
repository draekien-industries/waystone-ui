import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from '@waystone/components';
import { getThemeTextVariants } from '../../utils';
import { getColorType, getTextVariantType, getBooleanType } from '../utils';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    variant: 'body',
    inline: false,
  },
  argTypes: {
    children: {
      description: 'The text to render in the component.',
    },
    variant: {
      description: 'Determines the font size, weight and family to render.',
      options: getThemeTextVariants(),
      type: getTextVariantType(),
      table: {
        defaultValue: { summary: 'body' },
      },
      control: { type: 'select' },
    },
    color: {
      type: getColorType(),
      description:
        'Determines the color of text to render. Defaults to inheriting from the parent element if no value is provided.',
      control: { type: 'color' },
    },
    inline: {
      description:
        'Determines whether the component is rendered as an inline-block.',
      table: {
        defaultValue: { summary: false },
      },
      control: { type: 'boolean' },
      type: getBooleanType(),
    },
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children:
    "I'm a basic text component. I should be used whenever you need to render text onto the DOM.",
};

export const Variants = Template.bind({});

Variants.args = {
  children: "Use the 'variant' prop to change my font size, weight, and family",
  variant: 'body',
};

export const Inline: Story<TextProps> = (args) => (
  <div>
    <Text>
      Set the &apos;inline&apos; prop if you want me to render on the same line
      as the preceeding component (where possible).
    </Text>
    <Text {...args}>Line One.</Text>
    <Text {...args}>Line Two.</Text>
  </div>
);

Inline.args = {
  inline: true,
};

export const Colors = Template.bind({});

Colors.args = {
  children: "You can use the 'color' prop to specify a custom or theme color",
  color: 'p-600',
};
