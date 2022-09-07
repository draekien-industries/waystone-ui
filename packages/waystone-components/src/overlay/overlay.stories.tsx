import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Overlay, OverlayProps } from './overlay';
import { Text } from '../text';
import exampleImage from '../../public/example-image.png';

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
    }}
  >
    <Overlay {...args} />
    <img src={exampleImage} alt="example" />
    <Text>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores enim
      incidunt culpa consequatur dolorum voluptatibus nulla nihil at odit! Porro
      architecto dolores explicabo, unde in eligendi numquam facilis delectus
      beatae.
    </Text>
  </div>
);

export const Default = Template.bind({});

export const FullScreen = Template.bind({});

FullScreen.args = { fullScreen: true } as OverlayProps;
