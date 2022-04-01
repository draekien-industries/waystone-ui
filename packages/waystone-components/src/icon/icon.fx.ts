import { IconVariant } from './icon.types';

export const getIconClassName = (variant?: IconVariant, className?: string) => {
  const trimmed = variant?.trim() as IconVariant;

  return trimmed === 'filled'
    ? `material-icons ${className || ''}`.trimEnd()
    : `material-icons-${trimmed} ${className || ''}`.trimEnd();
};
