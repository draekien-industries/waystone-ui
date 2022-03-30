import { addDarkModeSuffix, Size } from '@waystone/core';
import { ButtonVariant } from './button.styles';

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
      return `${variant[0]}-200`;
  }
};

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

type ComputedBoxShadowStyles = {
  normal: string;
  hover: string;
  active: string;
};

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

type ComputedPaddingStyles = {
  paddingX: string | number;
  paddingY: string | number;
};

export const getPadding = (
  size: Size,
  noPadding: boolean
): ComputedPaddingStyles => {
  if (noPadding) return { paddingX: 0, paddingY: 0 };

  switch (size) {
    case 'sm': {
      return {
        paddingX: 'md',
        paddingY: 'xs',
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
