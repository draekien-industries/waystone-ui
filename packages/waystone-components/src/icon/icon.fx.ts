import { IconVariant } from './icon';

export const getIconClassName = (variant?: IconVariant, className?: string) => {
  variant = variant?.trim() as IconVariant;

  return variant === 'filled'
    ? `material-icons ${className || ''}`.trimEnd()
    : `material-icons-${variant} ${className || ''}`.trimEnd();
};
