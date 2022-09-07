import { alpha } from '@theme-ui/color';
import { ButtonVariant } from '@waystone/core';
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

export interface ButtonCssProps
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
}: ButtonCssProps): ThemeUIStyleObject => {
  const { normalBoxShadow, hoverBoxShadow, activeBoxShadow } = getBoxShadow({
    variant,
    darkMode,
  });

  const { paddingX, paddingY } = getPadding({ variant, size });
  const color = getColor(variant);
  const outlineColor = darkMode ? 'b-600' : 'info-000';

  const isLink = variant === 'link';

  const hover: ThemeUIStyleObject = {
    color: isLink ? getLinkVariantHoverColor(darkMode) : color,
    boxShadow: hoverBoxShadow,
    backgroundColor: getHoverBackgroundColor(variant),
  };

  const focus: ThemeUIStyleObject = {
    color: isLink ? getLinkVariantActiveColor(darkMode) : color,
    boxShadow: activeBoxShadow,
    backgroundColor: getActiveBackgroundColor(variant),
    outlineColor: alpha(outlineColor, 1),
    outlineWidth: 'sm',
    outlineStyle: 'solid',
  };

  const final: ThemeUIStyleObject = {
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
      ...hover,
    },
    ':enabled:active, :enabled:focus': {
      ...focus,
    },
    ':disabled': {
      color: 'b-400',
      backgroundColor: !isLink && 'muted',
      cursor: 'not-allowed',
    },
  };

  if (active) {
    return { ...final, ...focus };
  }

  return final;
};

export const buttonAddonCss: ThemeUIStyleObject = {
  marginRight: 'sm',
};
