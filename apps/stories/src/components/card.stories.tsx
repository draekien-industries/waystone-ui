import type { Meta, StoryObj } from '@storybook/react';
import { Card, type CardImageCss } from '@waystone/card';
import { getThemeSpaces } from '../../.storybook/preview.fx';

const options: CardImageCss = {
  src: '/example-image.png',
  height: 'md',
  backgroundColor: 'secondary',
};

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum dolor nemo atque reiciendis recusandae nam, voluptate earum? Sint, quae omnis! Enim labore harum reiciendis hic id. Eaque, dolores impedit?',
  },
  argTypes: {
    width: {
      type: 'string',
      description: '',
      option: getThemeSpaces(),
      control: { type: 'text' },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};

export const WithCardPadding: StoryObj<typeof meta> = {
  args: {
    image: options,
    padding: 'md',
  },
};

export const WithPaddedContent: StoryObj<typeof meta> = {
  args: {
    children: (
      <>
        <div>My container has no padding</div>
        <div style={{ padding: '1rem' }}>My container has 1rem of padding</div>
      </>
    ),
  },
};

export const WithDimensions: StoryObj<typeof meta> = {
  args: {
    maxWidth: 'md',
    maxHeight: 'md',
  },
};

export const WithImageCss: StoryObj<typeof meta> = {
  args: {
    image: options,
    maxWidth: 'xl',
  },
};

export const WithImageComponent: StoryObj<typeof meta> = {
  args: {
    image: <img width="100%" src="/example-image.png" alt="" />,
    maxWidth: 'xl',
  },
};

export const WithNoBoxShadow: StoryObj<typeof meta> = {
  args: {
    boxShadow: 'none',
  },
};
