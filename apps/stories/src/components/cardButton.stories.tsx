import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CardButton, CardButtonProps, Text } from '@waystone/components/src';

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
} as ComponentMeta<typeof CardButton>;

const Template: ComponentStory<typeof CardButton> = (args) => (
  <CardButton {...args} />
);

export const Default = Template.bind({});

export const WithConstraints = Template.bind({});

WithConstraints.args = {
  width: 'xl',
} as CardButtonProps;
