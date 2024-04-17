import type { ThemeUIStyleObject } from 'theme-ui';
import type { HasWidth } from '../../../common';

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
  marginBottom: 'extra-small',
};

export const labelCss: ThemeUIStyleObject = {
  alignItems: 'center',
  gap: 'extra-small',
};
