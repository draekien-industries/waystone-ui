import type { Meta, StoryObj } from '@storybook/react';
import { Code } from '@waystone/code';
import { Text } from '@waystone/components';

const meta: Meta<typeof Code> = {
  title: 'Components/Code',
  component: Code,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'code',
  },
};

export const WithOtherText: StoryObj<typeof meta> = {
  ...Default,
  render: (args) => (
    <Text>
      This is an example of the Code component being used inside a{' '}
      <Code {...args} /> component.
    </Text>
  ),
};

export const WithScaling: StoryObj<typeof meta> = {
  ...Default,
  render: (args) => (
    <Text variant="subtitle">
      You can scale a <Code {...args} /> by setting the font size on the parent
      container.
    </Text>
  ),
};
