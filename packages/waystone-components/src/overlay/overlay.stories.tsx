import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Overlay, OverlayProps } from './overlay';
import { Text } from '../text/text';

export default {
  title: 'Components/Overlay',
  component: Overlay,
  args: {
    fullScreen: false,
  },
} as Meta;

const Template: Story<OverlayProps> = (args) => (
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
