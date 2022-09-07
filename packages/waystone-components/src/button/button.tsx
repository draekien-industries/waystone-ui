/** @jsxImportSource theme-ui */
import React from 'react';
import { ButtonVariant } from '@waystone/core';
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
import { buttonAddonCss, buttonCss, ButtonCssProps } from './button.styles';
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
  const shouldRenderChildren = !loading || !hideContentWhileLoading;
  const shouldRenderIcon = !loading && icon;

  const buttonCssProps: ButtonCssProps = {
    variant,
    size,
    darkMode: isDarkMode,
    active,
    ...rest,
  };

  const sx = buttonCss(buttonCssProps);

  return (
    <ThemeUiButton sx={sx} disabled={shouldBeDisabled} {...rest}>
      {loading && (
        <Flex sx={buttonAddonCss}>
          <Spinner size="sm" />
        </Flex>
      )}
      {shouldRenderIcon && (
        <Flex sx={buttonAddonCss}>
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
