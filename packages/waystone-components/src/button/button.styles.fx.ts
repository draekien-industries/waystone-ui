import { addDarkModeSuffix, ButtonVariant, Size } from '@waystone/core';

type getBackgroundColorProps = {
  variant?: ButtonVariant;
  darkMode?: boolean;
};

export const getBackgroundColor = ({
  variant = 'primary',
}: getBackgroundColorProps) => {
  switch (variant) {
    case 'ghost':
      return 'ghost';
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
 * If the variant is ghost, return muted, if it's link, return transparent, otherwise return the
 * variant with a -100 suffix.
 * @param {ButtonVariant} variant - ButtonVariant
 * @returns A function that takes a variant and returns a color.
 */
export const getHoverBackgroundColor = ({
  variant = 'primary',
  darkMode,
}: getBackgroundColorProps) => {
  switch (variant) {
    case 'ghost':
      return darkMode ? 'b-600' : 'b-200';
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
export const getActiveBackgroundColor = ({
  variant = 'primary',
  darkMode,
}: getBackgroundColorProps) => {
  switch (variant) {
    case 'ghost':
      return darkMode ? 'b-500' : 'b-50';
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
 * It returns a string based on the variant passed in
 * @param {ButtonVariant} variant - The variant of the button.
 * @returns A string
 */
export const getColor = (variant?: ButtonVariant) => {
  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'accent':
    case 'highlight':
      return 'b-800';
    default:
      return 'text';
  }
};

/**
 * Gets the active color for a link button based on the dark mode
 * @param darkMode - Is the app using dark mode?
 * @returns
 */
export const getLinkVariantActiveColor = (darkMode: boolean) =>
  darkMode ? 'h-400' : 'h-700';

/**
 * Gets the hover color for a link button based on the dark mode
 * @param darkMode - Is the app using dark mode?
 * @returns
 */
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
  normalBoxShadow: string;
  hoverBoxShadow: string;
  activeBoxShadow: string;
};

type getBoxShadowProps = {
  variant?: ButtonVariant;
  darkMode?: boolean;
};

export const getBoxShadow = ({
  variant = 'primary',
  darkMode,
}: getBoxShadowProps): ComputedBoxShadowStyles => {
  if (['ghost', 'link'].includes(variant)) {
    return {
      normalBoxShadow: 'none',
      hoverBoxShadow: 'none',
      activeBoxShadow: 'none',
    };
  }

  return {
    normalBoxShadow: addDarkModeSuffix('sm', darkMode),
    hoverBoxShadow: addDarkModeSuffix('md', darkMode),
    activeBoxShadow: addDarkModeSuffix('sm', darkMode),
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

type getPaddingProps = {
  variant?: ButtonVariant;
  size?: Size;
};

export const getPadding = ({
  variant = 'primary',
  size,
}: getPaddingProps): ComputedPaddingStyles => {
  if (variant === 'link') return { paddingX: 0, paddingY: 0 };

  switch (size) {
    case 'sm': {
      return {
        paddingX: 'sm',
        paddingY: 'xs',
      };
    }
    case 'lg': {
      return {
        paddingX: 'xl',
        paddingY: 'sm',
      };
    }
    default:
      return {
        paddingX: 'lg',
        paddingY: 'sm',
      };
  }
};
