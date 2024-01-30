import { Meta } from '@storybook/react';
import { CardButton, CardButtonProps, Text } from '@waystone/components/src';
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
    width: 'xl',
  } as CardButtonProps,
};
