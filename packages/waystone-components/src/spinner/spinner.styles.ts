import { keyframes } from '@emotion/react';
import { Size } from '@waystone/core';
import {
  ThemeUIStyleObject,
  StylePropertyValue,
  ThemeUICSSObject,
} from 'theme-ui';

import { CanBeFullWidth, HasColor, HasSize } from '../common/interfaces';

export interface SpinnerCssProps extends HasSize, HasColor, CanBeFullWidth {}

const changeContent = keyframes`
10% { content: "⠙"; }
20% { content: "⠹"; }
30% { content: "⠸"; }
40% { content: "⠼"; }
50% { content: "⠴"; }
60% { content: "⠦"; }
70% { content: "⠧"; }
80% { content: "⠇"; }
90% { content: "⠏"; }
`;

const getSpinnerSize = (size: Size) => {
  switch (size) {
    case 'sm':
      return '1.3125rem';
    case 'md':
      return '1.5em';
    case 'lg':
      return '2em';
    default:
      return '1.5em';
  }
};

export const spinnerCss = ({
  size,
  color,
  fullWidth,
}: SpinnerCssProps): ThemeUIStyleObject => {
  const css: ThemeUIStyleObject = {
    color: color as ThemeUICSSObject['color'],
    display: fullWidth ? 'flex' : 'inline-flex',
    width: fullWidth ? '100%' : 'auto',
    height: getSpinnerSize(size || 'md'),
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: '1',
    ':after': {
      animation: `${changeContent} 600ms linear infinite`,
      display: 'block',
      content: '"⠋"',
      fontSize: getSpinnerSize(size || 'md'),
    },
  };

  return css;
};
