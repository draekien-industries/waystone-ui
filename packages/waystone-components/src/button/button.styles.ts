import { alpha } from '@theme-ui/color';
import { ButtonVariant, Size } from '@waystone/core';
import { ThemeUIStyleObject } from 'theme-ui';
import {
  CanActivate,
  CanBeFullWidth,
  HasSize,
  HasVariant,
  HasWidth,
} from '../common';
import {
  getActiveBackgroundColor,
  getBackgroundColor,
  getBoxShadow,
  getColor,
  getHoverBackgroundColor,
  getLinkVariantActiveColor,
  getLinkVariantHoverColor,
  getPadding,
} from './button.styles.fx';

export interface ButtonCssParams
  extends HasVariant<ButtonVariant>,
    HasSize,
    HasWidth,
    CanBeFullWidth,
    CanActivate {
  darkMode: boolean;
}

export const buttonCss = ({
  variant,
  size,
  darkMode,
  width,
  minWidth,
  maxWidth,
  fullWidth,
  active,
}: ButtonCssParams): ThemeUIStyleObject => {
  const { normalBoxShadow, hoverBoxShadow, activeBoxShadow } = getBoxShadow({
    variant,
    darkMode,
  });

  const { paddingX, paddingY } = getPadding({ variant, size });
  const color = getColor(variant);
  const outlineColor = darkMode ? 'b-600' : 'info-000';

  const isLink = variant === 'link';

  const hoverCss: ThemeUIStyleObject = {
    color: isLink ? getLinkVariantHoverColor(darkMode) : color,
    boxShadow: hoverBoxShadow,
    backgroundColor: getHoverBackgroundColor({ variant, darkMode }),
  };

  const focusCss: ThemeUIStyleObject = {
    color: isLink ? getLinkVariantActiveColor(darkMode) : color,
    boxShadow: activeBoxShadow,
    backgroundColor: getActiveBackgroundColor({ variant, darkMode }),
    outlineColor: alpha(outlineColor, 1),
    outlineWidth: 'sm',
    outlineStyle: 'solid',
  };

  const activeCss: ThemeUIStyleObject = {
    color: isLink ? getLinkVariantActiveColor(darkMode) : color,
    boxShadow: activeBoxShadow,
    backgroundColor: getActiveBackgroundColor({ variant, darkMode }),
    outlineColor: alpha(outlineColor, 0),
    outlineWidth: 'sm',
    outlineStyle: 'solid',
  };

  const baseCss: ThemeUIStyleObject = {
    display: 'flex',
    flexWrap: 'nowrap',
    alignItems: 'center',
    justifyContent: 'center',
    color,
    backgroundColor: getBackgroundColor({ variant, darkMode }),
    paddingX,
    paddingY,
    width: fullWidth ? '100%' : width,
    maxWidth: !fullWidth && maxWidth,
    minWidth: !fullWidth && minWidth,
    boxShadow: normalBoxShadow,
    margin: 0,
    cursor: 'pointer',
    transition: 'all 200ms ease',
    outlineColor: alpha(outlineColor, 0),
    outlineWidth: 'sm',
    outlineStyle: 'solid',
    ':enabled:hover': {
      ...hoverCss,
    },
    ':not(active):focus': {
      ...focusCss,
    },
    ':enabled:active': {
      ...activeCss,
    },
    ':disabled': {
      color: 'b-400',
      backgroundColor: !isLink && 'muted',
      cursor: 'not-allowed',
    },
  };

  if (active) {
    return { ...baseCss, ...activeCss };
  }

  return baseCss;
};

export interface ButtonAddonCssParams {
  hasChildren: boolean;
  variant: ButtonVariant;
  size: Size;
}

export const buttonAddonCss = ({
  hasChildren,
  variant,
  size,
}: ButtonAddonCssParams): ThemeUIStyleObject => ({
  marginRight: hasChildren && 'sm',
  marginY: getPadding({ variant, size }),
});
