import type { IconSize, IconVariant } from './icon.types';

export const getFontSize = (size?: IconSize) => {
  switch (size) {
    case 'extra-small':
      return '0.5em !important';
    case 'small':
      return '1em !important';
    case 'medium':
      return '1.5em !important';
    case 'large':
      return '2em !important';
    default:
      return 'inherit';
  }
};

export const getIconClassName = (variant?: IconVariant, className?: string) => {
  const trimmed = variant?.trim();

  return trimmed === 'filled'
    ? `material-icons ${className || ''}`.trim()
    : `material-icons-${trimmed} ${className || ''}`.trim();
};
