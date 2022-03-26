import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from '../../';

export default {
  component: Text,
  args: {
    variant: 'body',
    inline: false,
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Usage = Template.bind({});

Usage.args = {
  children:
    "I'm a basic text component. I should be used whenever you need to render text onto the DOM.",
};

export const WithVariants = Template.bind({});

WithVariants.args = {
  children: "Use the 'variant' prop to change my font size, weight, and family",
  variant: 'body',
};

export const WithInline: Story<TextProps> = (args) => (
  <div>
    <Text>
      Set the &apos;inline&apos; prop if you want me to render on the same line
      as the preceeding component (where possible).
    </Text>
    <Text {...args}>Line One.</Text>
    <Text {...args}>Line Two.</Text>
  </div>
);

WithInline.args = {
  inline: true,
};

export const WithColors = Template.bind({});

WithColors.args = {
  children: "You can use the 'color' prop to specify a custom or theme color",
  color: 'p-600',
};
