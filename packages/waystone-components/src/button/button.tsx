'use client';

import type { ButtonVariant, Size } from '@waystone/core';
import { useMemo } from 'react';
import type { ButtonProps as ThemeUiButtonProps } from 'theme-ui';
import { Flex, Button as ThemeUiButton } from 'theme-ui';
import type {
  CanActivate,
  CanBeFullWidth,
  CanDisable,
  CanLoad,
  HasSize,
  HasVariant,
  HasWidth,
} from '../common';
import { useIsDarkMode } from '../hooks/useIsDarkMode';
import type { IconProps } from '../icon';
import { Icon } from '../icon';
import { Spinner } from '../spinner';
import { Text } from '../text';
import { getTextVariant } from './button.fx';
import type { ButtonAddonCssParams, ButtonCssParams } from './button.styles';
import { buttonAddonCss, buttonCss } from './button.styles';

export type ButtonProps = {
  /** The text to render inside a button. */
  children?: string;
  /** The icon and it's variant to render. */
  icon?: Pick<IconProps, 'variant' | 'name'>;
  /**
   * Should the button hide its contents while it is in the loading state.
   * @default false
   */
  hideContentWhileLoading?: boolean;
} & Omit<ThemeUiButtonProps, 'sx' | 'variant' | 'children'> &
  HasVariant<ButtonVariant> &
  HasSize &
  HasWidth &
  CanDisable &
  CanLoad &
  CanActivate &
  CanBeFullWidth;

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
  size = 'small',
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

  const buttonSx = useMemo(() => {
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

  const buttonAddonSx = useMemo(() => {
    const buttonAddonCssParams: ButtonAddonCssParams = {
      variant,
      size,
      hasChildren: shouldRenderChildren,
    };

    return buttonAddonCss(buttonAddonCssParams);
  }, [variant, size, shouldRenderChildren]);

  const spinnerSize: Size = size === 'small' ? 'small' : 'medium';

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
