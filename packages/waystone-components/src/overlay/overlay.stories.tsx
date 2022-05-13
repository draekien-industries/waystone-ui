import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Overlay } from './overlay';
import { Text } from '../text/text';

export default {
  title: 'Components/Overlay',
  component: Overlay,
  args: {
    fullScreen: false,
  },
} as ComponentMeta<typeof Overlay>;

const Template: ComponentStory<typeof Overlay> = (args) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
      height: '20rem',
      backgroundColor: 'lightblue',
    }}
  >
    <Overlay {...args} />
    <Text>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores enim
      incidunt culpa consequatur dolorum voluptatibus nulla nihil at odit! Porro
      architecto dolores explicabo, unde in eligendi numquam facilis delectus
      beatae.
    </Text>
  </div>
);

export const Default = Template.bind({});
