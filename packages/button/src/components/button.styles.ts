import type { Theme } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import type { ButtonVariant } from './button.types';

export type ButtonVariantCssFn = (
  variant?: ButtonVariant
) => string | ((t: Theme) => string);

export const getBackgroundColor: ButtonVariantCssFn = (variant = 'primary') => {
  switch (variant) {
    case 'ghost':
      return alpha('ghost', 0.25);
    case 'link':
      return 'transparent';
    case 'destructive':
      return 'error-400';
    default:
      return `${variant[0]}-400`;
  }
};

export const getHoverBackgroundColor: ButtonVariantCssFn = (
  variant = 'primary'
) => {
  switch (variant) {
    case 'ghost':
      return alpha('active', 0.8);
    case 'link':
      return 'transparent';
    case 'destructive':
      return alpha('error-400', 0.8);
    default:
      return alpha(`${variant[0]}-400`, 0.8);
  }
};

export const getActiveBackgroundColor: ButtonVariantCssFn = (
  variant = 'primary'
) => {
  switch (variant) {
    case 'ghost':
      return 'active';
    case 'link':
      return 'transparent';
    case 'destructive':
      return alpha('error-400', 0.9);
    default:
      return alpha(`${variant[0]}-400`, 0.9);
  }
};

export const getColor: ButtonVariantCssFn = (variant = 'primary') => {
  switch (variant) {
    case 'primary':
    case 'secondary':
    case 'highlight':
    case 'accent':
      return 'b-900';
    default:
      return 'text';
  }
};

export const getInteractiveColor: ButtonVariantCssFn = (
  variant = 'primary'
) => {
  switch (variant) {
    case 'link':
      return 'h-500';
    default:
      return getColor(variant);
  }
};
