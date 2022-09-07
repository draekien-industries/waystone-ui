import { ThemeUIStyleObject } from 'theme-ui';
import { HasWidth } from '../common';

export const inputContainerCss = ({
  width,
  minWidth,
  maxWidth,
}: HasWidth): ThemeUIStyleObject => {
  const baseCss: ThemeUIStyleObject = {
    flexDirection: 'column',
  };

  return { ...baseCss, width, minWidth, maxWidth };
};

export const labelContainerCss: ThemeUIStyleObject = {
  justifyContent: 'space-between',
  alignItems: 'baseline',
  marginBottom: 'xs',
};
