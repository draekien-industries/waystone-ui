import { Icon } from '@waystone/icon';
import {
  Box,
  Button as ThemeUIButton,
  type ThemeUIStyleObject,
} from 'theme-ui';
import {
  outlineCss,
  boxShadowCss,
  disabledCss,
  cssSelectors,
} from '@waystone/css-presets';
import { forwardRef, type ForwardedRef } from 'react';
import type { ButtonProps, ButtonSize } from './button.types';
import {
  getActiveBackgroundColor,
  getBackgroundColor,
  getColor,
  getHoverBackgroundColor,
  getInteractiveColor,
  paddingY,
} from './button.styles';

const renderButton = (
  {
    children,
    icon,
    loading,
    size = 'small',
    variant = 'primary',
    color,
    fullWidth,
    ...rest
  }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const disabled = loading || rest.disabled;
  const isLink = variant === 'link';
  const isGhost = variant === 'ghost';

  const interactiveColor = getInteractiveColor(variant);

  const hoverCss: ThemeUIStyleObject = {
    color: interactiveColor,
    boxShadow: boxShadowCss.focused,
    backgroundColor: getHoverBackgroundColor(variant),
  };

  const focusCss: ThemeUIStyleObject = {
    ...hoverCss,
    boxShadow: boxShadowCss.active,
  };

  const activeCss: ThemeUIStyleObject = {
    ...focusCss,
    backgroundColor: getActiveBackgroundColor(variant),
  };

  return (
    <ThemeUIButton
      ref={ref}
      sx={{
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'center',
        color: color || getColor(variant),
        gap: 'small',
        paddingX: isLink ? 0 : size,
        paddingY: isLink ? 0 : paddingY[size],
        width: fullWidth ? '100%' : undefined,
        cursor: 'pointer',
        transition: 'all 200ms',
        backgroundColor: rest.active
          ? activeCss.backgroundColor
          : getBackgroundColor(variant),
        ...outlineCss.base,
        ...(isLink || isGhost ? {} : boxShadowCss.base),
        [cssSelectors.hover]: {
          ...hoverCss,
        },
        [cssSelectors.focusVisible]: {
          ...outlineCss.focused,
          ...focusCss,
        },
        [cssSelectors.active]: {
          ...outlineCss.active,
          ...activeCss,
        },
        [cssSelectors.disabled]: {
          ...disabledCss,
          backgroundColor: isLink ? undefined : 'muted',
          cursor: 'not-allowed',
        },
      }}
      {...rest}
      disabled={disabled || loading}
    >
      {loading ? (
        <Box>Loading...</Box> // TODO: loading state
      ) : (
        <>
          {icon && <Icon {...icon}>{icon.name}</Icon>}
          {children}
        </>
      )}
    </ThemeUIButton>
  );
};

export const Button = forwardRef(renderButton);
