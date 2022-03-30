import { Size } from '@waystone/core';
import { ThemeUIStyleObject } from 'theme-ui';
import { IconStyleProps } from './icon';

enum IconSize {
  sm = '1em',
  md = '1.5em',
  lg = '2em',
}

const convert = (size: Size): IconSize =>
  IconSize[Size[size] as keyof typeof IconSize];

export const iconCss = (props: IconStyleProps): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    verticalAlign: 'middle',
    color: props.color || 'inherit',
    fontSize: 'inherit',
  };

  if (props.size) {
    css.fontSize = `${convert(props.size)} !important`;
  }

  return css;
};
