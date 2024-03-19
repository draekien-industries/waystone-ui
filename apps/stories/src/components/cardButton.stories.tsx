import type { Meta, StoryObj } from '@storybook/react';
import { CardButton, Text } from '@waystone/components/src';

const meta: Meta<typeof CardButton> = {
  title: 'Components/CardButton',
  component: CardButton,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum
        dolor nemo atque reiciendis recusandae nam, voluptate earum? Sint, quae
        omnis! Enim labore harum reiciendis hic id. Eaque, dolores impedit?
      </Text>
    ),
    fullWidth: false,
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};

export const WithConstraints: StoryObj<typeof meta> = {
  args: {
    width: 'xl',
  },
};
