import type { StatusVariant } from '@waystone/core';

export const getIconName = (variant?: StatusVariant) => {
  switch (variant) {
    case 'success':
      return 'check_circle';
    case 'error':
      return 'error';
    case 'warning':
      return 'warning';
    default:
      return 'info';
  }
};

export const getVariantColor = (variant?: StatusVariant) =>
  variant ? `${variant}-400` : 'b-400';
