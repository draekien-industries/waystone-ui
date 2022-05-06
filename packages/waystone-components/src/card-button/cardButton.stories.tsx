import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CardButton, CardButtonProps } from './cardButton';
import { Text } from '../text/text';

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
} as Meta;

const Template: Story<CardButtonProps> = (args) => <CardButton {...args} />;

export const Default = Template.bind({});

export const WithConstraints = Template.bind({});

WithConstraints.args = {
  width: 'xl',
};
