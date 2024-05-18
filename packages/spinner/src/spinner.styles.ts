import { keyframes } from '@emotion/react';
import type { ThemeUICSSObject } from 'theme-ui';
import type { SpinnerProps, SpinnerSize } from './spinner.types';

export const pathKeyframes = keyframes({
  '0%': {
    clipPath: 'polygon(50% 50%, 0 0, 50% 0%, 50% 0%, 50% 0%, 50% 0%, 50% 0% )',
  },
  '12.5%': {
    clipPath:
      'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 0%, 100% 0%, 100% 0% )',
  },
  '25%': {
    clipPath:
      'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 100% 100%, 100% 100% )',
  },
  '50%': {
    clipPath:
      'polygon(50% 50%, 0 0, 50% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100% )',
  },
  '62.5%': {
    clipPath:
      'polygon(50% 50%, 100% 0, 100% 0%, 100% 0%, 100% 100%, 50% 100%, 0% 100% )',
  },
  '75%': {
    clipPath:
      'polygon(50% 50%, 100% 100%, 100% 100%, 100% 100%, 100% 100%, 50% 100%, 0% 100% )',
  },
  '100%': {
    clipPath:
      'polygon(50% 50%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 50% 100%, 0% 100% )',
  },
});

export const transformKeyframes = keyframes({
  '0%': { transform: 'scaleY(1) rotate(0deg)' },
  '49.99%': { transform: 'scaleY(1) rotate(135deg)' },
  '50%': { transform: 'scaleY(-1) rotate(0deg)' },
  '100%': { transform: 'scaleY(-1) rotate(-135deg)' },
});

export const widthCss = {
  small: '1rem',
  medium: '1.5rem',
  large: '3rem',
} as const satisfies Record<SpinnerSize, string>;

export const borderCss = {
  small: '0.25rem solid',
  medium: '0.25rem solid',
  large: '0.5rem solid',
} as const satisfies Record<SpinnerSize, string>;

export const getSpinnerCss = ({
  size = 'medium',
  color = 'highlight',
}: SpinnerProps): ThemeUICSSObject => ({
  width: widthCss[size],
  aspectRatio: 1,
  borderRadius: '50%',
  border: borderCss[size],
  borderColor: color,
  animation: `${pathKeyframes} 0.8s infinite linear alternate, ${transformKeyframes} 1.6s infinite linear`,
});
