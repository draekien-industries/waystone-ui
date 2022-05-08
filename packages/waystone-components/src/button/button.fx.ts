import { addDarkModeSuffix, Size } from '@waystone/core';
import { ButtonVariant } from './button.types';

/**
 * It returns the background color for a button based on the variant and dark mode
 * @param {ButtonVariant} variant - The variant of the button.
 * @param {boolean} darkMode - boolean - This is a boolean value that determines whether the button
 * should be dark or light.
 * @returns A string
 */
export const getBackgroundColor = (
  variant: ButtonVariant,
  darkMode: boolean
) => {
  switch (variant) {
    case 'ghost':
      return darkMode ? 'b-700' : 'b-100';
    case 'link':
      return 'transparent';
    case 'primary':
    case 'secondary':
    case 'accent':
    case 'highlight':
    default:
      return `${variant[0]}-200`;
  }
};

/**
 * If the variant is ghost, return muted, if it's link, return transparent, otherwise return the
 * variant with a -100 suffix.
 * @param {ButtonVariant} variant - ButtonVariant
 * @returns A function that takes a variant and returns a color.
 */
export const getHoverBackgroundColor = (variant: ButtonVariant) => {
  switch (variant) {
    case 'ghost':
      return 'muted';
    case 'link':
      return 'transparent';
    case 'primary':
    case 'secondary':
    case 'accent':
    case 'highlight':
    default:
      return `${variant[0]}-300`;
  }
};

/**
 * If the variant is ghost, return muted, if it's link, return transparent, otherwise return the
 * variant with a 600 appended to it.
 * @param {ButtonVariant} variant - ButtonVariant
 * @returns A function that takes a variant and returns a color.
 */
export const getActiveBackgroundColor = (variant: ButtonVariant) => {
  switch (variant) {
    case 'ghost':
      return 'muted';
    case 'link':
      return 'transparent';
    case 'primary':
    case 'secondary':
    case 'accent':
    case 'highlight':
    default:
      return `${variant[0]}-400`;
  }
};

/**
 * It returns a string based on the variant passed in
 * @param {ButtonVariant} variant - The variant of the button.
 * @returns A string
 */
export const getColor = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'accent':
    case 'highlight':
      return 'b-600';
    default:
      return 'text';
  }
};

export const getLinkVariantActiveColor = (darkMode: boolean) =>
  darkMode ? 'h-400' : 'h-700';

export const getLinkVariantHoverColor = (darkMode: boolean) =>
  darkMode ? 'h-300' : 'h-600';

/**
 * `ComputedBoxShadowStyles` is an object with three properties: `normal`, `hover`, and `active`. Each
 * of those properties is a string.
 * @property {string} normal - The box-shadow style for the normal state.
 * @property {string} hover - The box-shadow style when the user hovers over the button.
 * @property {string} active - The box-shadow style when the button is active.
 */
type ComputedBoxShadowStyles = {
  normal: string;
  hover: string;
  active: string;
};

/**
 * It returns a `ComputedBoxShadowStyles` object, which is a type that has three properties: `normal`,
 * `hover`, and `active`. Each of these properties is a string that represents a box shadow value
 * @param {ButtonVariant} variant - ButtonVariant
 * @param {boolean} darkMode - boolean
 * @returns An object with 3 keys: normal, hover, and active.
 */
export const getBoxShadow = (
  variant: ButtonVariant,
  darkMode: boolean
): ComputedBoxShadowStyles => {
  if (['ghost', 'link'].includes(variant)) {
    return {
      normal: 'none',
      hover: 'none',
      active: 'none',
    };
  }

  return {
    normal: addDarkModeSuffix('sm', darkMode),
    hover: addDarkModeSuffix('md', darkMode),
    active: addDarkModeSuffix('sm', darkMode),
  };
};

/**
 * `ComputedPaddingStyles` is an object with two properties, `paddingX` and `paddingY`, which are both
 * strings or numbers.
 * @property {string | number} paddingX - The padding on the left and right sides of the component.
 * @property {string | number} paddingY - The padding on the top and bottom of the component.
 */
type ComputedPaddingStyles = {
  paddingX: string | number;
  paddingY: string | number;
};

/**
 * "If noPadding is true, return 0 padding, otherwise return padding based on the size prop."
 *
 * The function is a little more complicated than that, but that's the gist of it
 * @param {Size} size - Size - The size of the button.
 * @param {boolean} noPadding - boolean - This is a boolean that determines whether or not the
 * component should have padding.
 * @returns An object with two properties, paddingX and paddingY.
 */
export const getPadding = (
  size: Size,
  noPadding: boolean
): ComputedPaddingStyles => {
  if (noPadding) return { paddingX: 0, paddingY: 0 };

  switch (size) {
    case 'sm': {
      return {
        paddingX: 'md',
        paddingY: 'sm',
      };
    }
    case 'lg': {
      return {
        paddingX: 'xl',
        paddingY: '0.75rem',
      };
    }
    default:
      return {
        paddingX: 'lg',
        paddingY: 'sm',
      };
  }
};

/**
 * It takes a size and returns a variant
 * @param {Size} size - Size - This is the size of the text.
 * @returns A string
 */
export const getVariant = (size: Size) => {
  switch (size) {
    case 'sm':
      return 'text.caption';
    case 'lg':
      return 'text.eyebrow';
    default:
      return 'text.body';
  }
};
