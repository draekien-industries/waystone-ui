import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text as TextComponent, TextProps } from '@waystone/components';

export default {
  title: 'Components/Text',
  component: TextComponent,
} as Meta;

const Template: Story<TextProps> = (args) => <TextComponent {...args} />;

export const Basic = Template.bind({});

Basic.args = {
  children:
    "I'm a basic text component. I should be used whenever you need to render text onto the DOM.",
};
