import { IconVariant } from './icon.types';

export const getIconClassName = (variant?: IconVariant, className?: string) =>
  variant === 'filled'
    ? `material-icons ${className}`.trimEnd()
    : `material-icons-${variant} ${className}`.trimEnd();
