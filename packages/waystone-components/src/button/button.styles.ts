import type { ThemeUIStyleObject } from 'theme-ui';
import type { ButtonVariant, Size } from '@waystone/core';
import { getOutlineCss } from '@waystone/core';
import type {
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

export type ButtonCssParams = {
  darkMode: boolean;
} & HasVariant<ButtonVariant> &
  HasSize &
  HasWidth &
  CanBeFullWidth &
  CanActivate;

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
  const outline = getOutlineCss();

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
  };

  const activeCss: ThemeUIStyleObject = {
    color: isLink ? getLinkVariantActiveColor(darkMode) : color,
    boxShadow: activeBoxShadow,
    backgroundColor: getActiveBackgroundColor({ variant, darkMode }),
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
    ...outline.base,
    ':enabled:hover': {
      ...hoverCss,
    },
    ':not(active):focus-visible': {
      ...focusCss,
      ...outline.focused[':enabled:not(active):focus-visible'],
    },
    ':enabled:active': {
      ...activeCss,
      ...outline.active[':enabled:active'],
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

export type ButtonAddonCssParams = {
  hasChildren: boolean;
  variant: ButtonVariant;
  size: Size;
};

export const buttonAddonCss = ({
  hasChildren,
  variant,
  size,
}: ButtonAddonCssParams): ThemeUIStyleObject => ({
  marginRight: hasChildren && 'small',
  marginY: getPadding({ variant, size }),
});
