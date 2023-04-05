import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { TextVariant } from '@waystone/core/src';
import { Text, TextProps } from '@waystone/components/src';

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
} as Meta<typeof Text>;

export const Default = {};

const VariantTemplate: StoryFn<typeof Text> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant, children, ...rest } = args;

  return (
    <div>
      {Object.keys(TextVariant).map((textVariant) => (
        <Text key={textVariant} variant={textVariant as TextVariant} {...rest}>
          {variant}
        </Text>
      ))}
    </div>
  );
};

export const WithVariant = {
  render: VariantTemplate,

  parameters: {
    docs: {
      description: {
        story:
          'These are the text variants that have been pre-defined in the theme.',
      },
    },
  },
};

export const WithColor = {
  parameters: {
    docs: {
      description: {
        story:
          'The `colors` prop determines the color of the text that is rendered. ' +
          'You can use any of the colors included in the theme ' +
          'or your own color.',
      },
    },
  },

  args: {
    color: 's-400',
  } as TextProps,
};

const InlineTemplate: StoryFn<typeof Text> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { color, ...rest } = args;

  return (
    <div>
      <Text {...rest} color="s-400" />
      <Text {...rest} color="h-400" />
    </div>
  );
};

export const WithInline = {
  render: InlineTemplate,

  parameters: {
    docs: {
      description: {
        story:
          'When the `inline` prop is set to `true`, ' +
          'the component will render with `inline-block` as the CSS display value.',
      },
    },
  },

  args: {
    inline: true,
    children: 'Lorem ipsum.',
  } as TextProps,
};
