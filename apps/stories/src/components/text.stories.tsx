import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Text, textVariants } from '@waystone/text';

const meta: Meta<typeof Text> = {
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
  argTypes: {
    as: {
      description:
        'Instructs the component to render as a specific HTML element',
      type: {
        name: 'enum',
        value: [
          'span',
          'div',
          'summary',
          'detail',
          'p',
          'h1',
          'h2',
          'h3',
          'h5',
          'small',
          'label',
        ],
      },
      table: {
        type: {
          summary: 'ElementType',
        },
      },
    },
  },
};

export default meta;

export const Default = {};

const VariantTemplate: StoryFn<typeof Text> = (args) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { variant, children, ...rest } = args;

  return (
    <div>
      {textVariants.map((v) => (
        <Text key={v} variant={v} {...rest}>
          {v}
        </Text>
      ))}
    </div>
  );
};

export const WithVariant: StoryObj<typeof meta> = {
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

export const WithColor: StoryObj<typeof meta> = {
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
  },
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

export const WithInline: StoryObj<typeof meta> = {
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
  },
};

export const AsParagraph: StoryObj<typeof meta> = {
  parameters: {
    docs: {
      description: {
        story:
          'Use the `as` prop to render the text as different HTML elements such as `p`, `h1`, etc.',
      },
    },
  },

  args: {
    as: 'p',
  },
};
