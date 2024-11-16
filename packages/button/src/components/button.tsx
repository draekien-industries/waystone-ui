import {
  boxShadowCss,
  cssSelectors,
  disabledCss,
  outlineCss,
} from '@waystone/css-presets';
import { Icon } from '@waystone/icon';
import { Spinner } from '@waystone/spinner';
import {
  forwardRef,
  type ForwardRefExoticComponent,
  type ForwardedRef,
} from 'react';
import { Button as ThemeUIButton, type ThemeUICSSObject } from 'theme-ui';
import {
  getActiveBackgroundColor,
  getBackgroundColor,
  getColor,
  getHoverBackgroundColor,
  getInteractiveColor,
  getSpinnerColor,
  paddingY,
} from './button.styles';
import type { ButtonProps } from './button.types';

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

  const hoverCss: ThemeUICSSObject = {
    color: interactiveColor,
    boxShadow: boxShadowCss.focused,
    backgroundColor: getHoverBackgroundColor(variant),
  };

  const focusCss: ThemeUICSSObject = {
    ...hoverCss,
    boxShadow: boxShadowCss.active,
  };

  const activeCss: ThemeUICSSObject = {
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
      {loading && !icon ? (
        <Spinner color={getSpinnerColor(variant)} />
      ) : (
        <>
          {icon &&
            (loading ? (
              <Spinner color={getSpinnerColor(variant)} size="small" />
            ) : (
              <Icon {...icon}>{icon.name}</Icon>
            ))}
          {children}
        </>
      )}
    </ThemeUIButton>
  );
};

export const Button: ForwardRefExoticComponent<ButtonProps> =
  forwardRef(renderButton);
