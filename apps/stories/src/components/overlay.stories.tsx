import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import type { OverlayProps } from '@waystone/components/src';
import { Overlay, Text } from '@waystone/components/src';
import * as React from 'react';

const meta: Meta<typeof Overlay> = {
  title: 'Components/Overlay',
  component: Overlay,
  args: {
    fullScreen: false,
  },
};

export default meta;

const Template: StoryFn<typeof Overlay> = (args) => (
  <div
    style={{
      position: 'relative',
      width: '100%',
    }}
  >
    <Overlay {...args} />
    <img src="/example-image.png" alt="example" />
    <Text>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores enim
      incidunt culpa consequatur dolorum voluptatibus nulla nihil at odit! Porro
      architecto dolores explicabo, unde in eligendi numquam facilis delectus
      beatae.
    </Text>
  </div>
);

export const Default: StoryObj<typeof meta> = {
  render: Template,
};

export const FullScreen: StoryObj<typeof meta> = {
  render: Template,
  args: { fullScreen: true } as OverlayProps,
};
