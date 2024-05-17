import { iconCss } from './icon.styles';
import type { IconProps } from './icon.types';
import { getFontSize, getIconClassName } from './icon.utils';

export const Icon = ({
  children,
  color = 'inherit',
  size = 'small',
  variant = 'outlined',
  className,
  ...rest
}: IconProps) => {
  const fontSize = getFontSize(size);
  const iconClassName = getIconClassName(variant, className);

  return (
    <i className={iconClassName} {...rest} sx={iconCss({ color, fontSize })}>
      {children}
    </i>
  );
};
