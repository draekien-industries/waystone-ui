import { ThemeUIStyleObject } from 'theme-ui';
import { HasColor, HasVariant } from '../common/interfaces';

/** @internal */
export interface TextCssOptions extends HasVariant, HasColor {
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
  }

  return css;
};
