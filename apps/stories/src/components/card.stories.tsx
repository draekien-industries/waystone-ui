import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '@waystone/components/src';
import type { CoverImageCssOptions } from '@waystone/components/src/card/card.styles';

const options: CoverImageCssOptions = {
  url: '/example-image.png',
  size: 'cover',
  position: 'center',
  repeat: 'no-repeat',
  height: 'md',
  fallbackColor: 'secondary',
};

const coverImageDetail = `
height: 'The height of the image.',
url: 'The static URL of the image. This value will be used in the 'background-image' CSS property.',
size: 'The size of the image. Corresponds to the 'background-size' CSS property.',
position: 'The position of the image. Corresponds to the 'background-position' CSS property.',
repeat: 'Should the image be repeated. Corresponds to the 'background-repeat' CSS property.',
fallbackColor: 'The color to use if the image fails to load. Corresponds to the 'background-color' CSS property.'
`;

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus harum dolor nemo atque reiciendis recusandae nam, voluptate earum? Sint, quae omnis! Enim labore harum reiciendis hic id. Eaque, dolores impedit?',
    fullWidth: false,
  },
  argTypes: {
    coverImage: {
      table: {
        type: {
          detail: coverImageDetail,
        },
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};

export const WithConstraints: StoryObj<typeof meta> = {
  args: {
    maxWidth: 'md',
    maxHeight: 'md',
  },
};

export const WithCoverImage: StoryObj<typeof meta> = {
  args: {
    coverImage: options,
    maxWidth: 'xl',
  },
};
