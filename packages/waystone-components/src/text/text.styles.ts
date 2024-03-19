import type { TextVariant } from '@waystone/core';
import type { ThemeUIStyleObject } from 'theme-ui';
import type { HasColor, HasVariant } from '../common/interfaces';

/** @internal */
export type TextCssOptions = {
  inline: boolean;
} & HasVariant<TextVariant> &
  HasColor;

/** @internal */
export const textCss: (options: TextCssOptions) => ThemeUIStyleObject = ({
  inline,
  variant,
  color,
}) => {
  const css: ThemeUIStyleObject = {
    display: 'block',
    variant: `text.${variant}`,
    color: color || 'inherit',
  };

  if (inline) {
    css.display = 'inline-block';
    css.marginY = 0;
    css.marginX = 0;
  }

  return css;
};
