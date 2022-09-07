import { TextVariant } from '@waystone/core';
import { ThemeUIStyleObject } from 'theme-ui';
import { HasColor, HasVariant } from '../common/interfaces';

/** @internal */
export interface TextCssOptions extends HasVariant<TextVariant>, HasColor {
  inline: boolean;
}

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
