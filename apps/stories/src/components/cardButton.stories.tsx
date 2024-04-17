import type { Meta } from '@storybook/react';
import type { CardButtonProps } from '@waystone/components/src';
import { CardButton, Text } from '@waystone/components/src';
import * as React from 'react';

export default {
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
} as Meta<typeof CardButton>;

export const Default = {};

export const WithConstraints = {
  args: {
    width: 'extra-large',
  } as CardButtonProps,
};
