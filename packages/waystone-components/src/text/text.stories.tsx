import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextVariant } from '@waystone/core';
import { Text, TextProps } from './text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    variant: 'body',
    inline: false,
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ' +
      'Non dolorum facilis similique commodi, officiis error quis molestiae in repellat, ' +
      'minus delectus nesciunt, voluptas quos autem? Nostrum quidem mollitia nemo quas!',
  },
} as Meta;

const Template: Story<TextProps> = (args) => <Text {...args} />;

export const Default = Template.bind({});

const VariantTemplate: Story<TextProps> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant, children, ...rest } = args;

  return (
    <div>
      {Object.keys(TextVariant).map((textVariant, index) => (
        <Text key={index} variant={textVariant as TextVariant} {...rest}>
          {variant}
        </Text>
      ))}
    </div>
  );
};

export const WithVariant = VariantTemplate.bind({});

WithVariant.parameters = {
  docs: {
    description: {
      story:
        'These are the text variants that have been pre-defined in the theme.',
    },
  },
};

export const WithColor = Template.bind({});

WithColor.parameters = {
  docs: {
    description: {
      story:
        'The `colors` prop determines the color of the text that is rendered. ' +
        'You can use any of the colors included in the theme ' +
        'or your own color.',
    },
  },
};

WithColor.args = {
  color: 's-400',
};

const InlineTemplate: Story<TextProps> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...rest } = args;

  return (
    <div>
      <Text {...rest} color="s-400" />
      <Text {...rest} color="h-400" />
    </div>
  );
};

export const WithInline = InlineTemplate.bind({});

WithInline.parameters = {
  docs: {
    description: {
      story:
        'When the `inline` prop is set to `true`, ' +
        'the component will render with `inline-block` as the CSS display value.',
    },
  },
};

WithInline.args = {
  inline: true,
  children: 'Lorem ipsum.',
};
