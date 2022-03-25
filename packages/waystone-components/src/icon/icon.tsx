/** @jsxImportSource theme-ui */
import React from 'react';
import { getIconClassName } from './icon.fx';
import { iconCss } from './icon.styles';
import { IconProps } from './icon.types';

export * from './icon.types';

export const Icon: React.FC<IconProps> = ({
  options = { variant: 'filled' },
  className,
  children,
  ...rest
}) => {
  const { variant } = options;

  return (
    <i
      sx={iconCss(options)}
      className={getIconClassName(variant || 'filled', className)}
      {...rest}>
      {children}
    </i>
  );
};
