import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Card, CardProps } from './card';
import exampleImage from './assets/example-image.png';

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum dolor nemo atque reiciendis recusandae nam, voluptate earum? Sint, quae omnis! Enim labore harum reiciendis hic id. Eaque, dolores impedit?',
    fullWidth: false,
  },
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});

export const WithConstraints = Template.bind({});

WithConstraints.args = {
  maxWidth: 'md',
  maxHeight: 'md',
};

export const WithCoverImage = Template.bind({});

WithCoverImage.args = {
  coverImageUrl: exampleImage,
  maxWidth: 'xl',
};
