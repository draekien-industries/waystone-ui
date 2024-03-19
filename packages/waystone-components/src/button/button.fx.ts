import type { Size, TextVariant } from '@waystone/core';

/**
 * It takes a size and returns a variant
 * @param {Size} size - Size - This is the size of the text.
 * @returns A string
 */
export const getTextVariant = (size?: Size): TextVariant => {
  switch (size) {
    case 'sm':
      return 'caption';
    case 'lg':
      return 'eyebrow';
    default:
      return 'body';
  }
};
