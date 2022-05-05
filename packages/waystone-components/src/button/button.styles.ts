import { alpha } from '@theme-ui/color';
import { ThemeUIStyleObject } from 'theme-ui';
import { HasSize, HasVariant, HasWidth } from '../common/interfaces';
import {
  getActiveBackgroundColor,
  getBackgroundColor,
  getBoxShadow,
  getColor,
  getHoverBackgroundColor,
  getPadding,
  getVariant,
} from './button.fx';
import { ButtonVariant } from './button.types';

export interface ButtonCssProps extends HasVariant, HasSize, HasWidth {
  /**
   * The style of button to render.
   * @default 'primary'
   * @override
   */
  variant: ButtonVariant;
  darkMode: boolean;
  noShadow: boolean;
  noPadding: boolean;
}

export const buttonCss = ({
  variant,
  size = 'md',
  darkMode,
  noShadow,
  noPadding,
  width,
  maxWidth,
  minWidth,
}: ButtonCssProps): ThemeUIStyleObject => {
  const { normal, hover, active } = getBoxShadow(variant, darkMode);
  const isLink = variant === 'link';
  const { paddingX, paddingY } = getPadding(size, isLink || noPadding);

  const css: ThemeUIStyleObject = {
    color: getColor(variant),
    backgroundColor: getBackgroundColor(variant, darkMode),
    variant: getVariant(size),
    paddingX,
    paddingY,
    margin: 0,
    width,
    maxWidth,
    minWidth,
    boxShadow: !noShadow && normal,
    cursor: 'pointer',
    outlineColor: alpha('info-000', 0.75),
    outlineWidth: 0,
    outlineStyle: 'solid',
    transition: 'all 200ms',
    ':enabled:hover, :enabled:focus': {
      boxShadow: !noShadow && hover,
      backgroundColor: getHoverBackgroundColor(variant),
      outlineColor: alpha('info-000', 0.75),
      outlineWidth: 'sm',
      outlineStyle: 'solid',
    },
    ':enabled:active': {
      boxShadow: !noShadow && active,
      backgroundColor: getActiveBackgroundColor(variant),
    },
    ':disabled': {
      color: 'b-400',
      backgroundColor: !isLink && 'muted',
      cursor: 'not-allowed',
    },
  };

  return css;
};
