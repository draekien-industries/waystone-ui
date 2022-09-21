/** @jsxImportSource theme-ui */
import React from 'react';
import { ButtonVariant, Size } from '@waystone/core';
import {
  Button as ThemeUiButton,
  ButtonProps as ThemeUiButtonProps,
  Flex,
} from 'theme-ui';
import {
  CanActivate,
  CanBeFullWidth,
  CanDisable,
  CanLoad,
  HasSize,
  HasVariant,
  HasWidth,
} from '../common';
import { Spinner } from '../spinner';
import { Icon, IconProps } from '../icon';
import { Text } from '../text';
import { useIsDarkMode } from '../hooks/useIsDarkMode';
import {
  buttonAddonCss,
  ButtonAddonCssParams,
  buttonCss,
  ButtonCssParams,
} from './button.styles';
import { getTextVariant } from './button.fx';

export interface ButtonProps
  extends Omit<ThemeUiButtonProps, 'sx' | 'variant' | 'children'>,
    HasVariant<ButtonVariant>,
    HasSize,
    HasWidth,
    CanDisable,
    CanLoad,
    CanActivate,
    CanBeFullWidth {
  /** The text to render inside a button. */
  children?: string;
  /** The icon and it's variant to render. */
  icon?: Pick<IconProps, 'variant' | 'name'>;
  /**
   * Should the button hide it's contents while it is in the loading state.
   * @default false
   */
  hideContentWhileLoading?: boolean;
}

/**
 * A pre-styled button with multiple sizes and variants. Supports loading, disabled, and active states.
 */
export const Button = ({
  children,
  icon,
  width,
  minWidth,
  maxWidth,
  fullWidth,
  variant = 'primary',
  size = 'sm',
  hideContentWhileLoading = false,
  loading = false,
  disabled = false,
  active = false,
  ...rest
}: ButtonProps) => {
  const isDarkMode = useIsDarkMode();

  const shouldBeDisabled = disabled || loading;
  const shouldRenderChildren =
    !!children && (!loading || !hideContentWhileLoading);
  const shouldRenderIcon = !loading && icon;

  const buttonSx = React.useMemo(() => {
    const buttonCssParams: ButtonCssParams = {
      variant,
      size,
      darkMode: isDarkMode,
      active,
      width,
      minWidth,
      maxWidth,
      fullWidth,
    };

    return buttonCss(buttonCssParams);
  }, [variant, size, isDarkMode, active, width, minWidth, maxWidth, fullWidth]);

  const buttonAddonSx = React.useMemo(() => {
    const buttonAddonCssParams: ButtonAddonCssParams = {
      variant,
      size,
      hasChildren: shouldRenderChildren,
    };

    return buttonAddonCss(buttonAddonCssParams);
  }, [variant, size, shouldRenderChildren]);

  const spinnerSize: Size = size === 'sm' ? 'sm' : 'md';

  return (
    <ThemeUiButton sx={buttonSx} disabled={shouldBeDisabled} {...rest}>
      {loading && (
        <Flex sx={buttonAddonSx}>
          <Spinner size={spinnerSize} />
        </Flex>
      )}
      {shouldRenderIcon && (
        <Flex sx={buttonAddonSx}>
          <Icon size="sm" {...icon} />
        </Flex>
      )}
      {shouldRenderChildren && (
        <Text variant={getTextVariant(size)} inline>
          {children}
        </Text>
      )}
    </ThemeUiButton>
  );
};
