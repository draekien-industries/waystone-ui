import type { ThemeUIStyleObject } from 'theme-ui';
import { keyframes } from '@emotion/react';
import type { ColorAttributes, SizeAttributes } from '@waystone/types';

const path = keyframes({
  '0%': {
    clipPath:
      'polygon(50% 50%, 0 0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )',
  },
  '12.5%': {
    clipPath:
      'polygon(50% 50%, 0 0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )',
  },
  '25%': {
    clipPath:
      'polygon(50% 50%, 0 0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )',
  },
  '50%': {
    clipPath:
      'polygon(50% 50%, 0 0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )',
  },
  '62.5%': {
    clipPath:
      'polygon(50% 50%, 100% 0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )',
  },
  '75%': {
    clipPath:
      'polygon(50% 50%, 100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )',
  },
  '100%': {
    clipPath:
      'polygon(50% 50%, 50% 100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )',
  },
});

const transform = keyframes({
  '0%': { transform: 'scaleY(1)  rotate(0deg)' },
  '49.99%': { transform: 'scaleY(1)  rotate(135deg)' },
  '50%': { transform: 'scaleY(-1) rotate(0deg)' },
  '100%': { transform: 'scaleY(-1) rotate(-135deg)' },
});

export type SpinnerSize = 'small' | 'medium' | 'large';

const width = {
  small: '1rem',
  medium: '1.5rem',
  large: '3rem',
} as const satisfies Record<SpinnerSize, string>;

const border = {
  small: '0.25rem solid',
  medium: '0.25rem solid',
  large: '0.5rem solid',
} as const satisfies Record<SpinnerSize, string>;

export type SpinnerProps = SizeAttributes<SpinnerSize> & ColorAttributes;

const getSpinnerCss = ({
  size = 'medium',
  color = 'highlight',
}: SpinnerProps) =>
  ({
    width: width[size],
    aspectRatio: 1,
    borderRadius: '50%',
    border: border[size],
    borderColor: color,
    animation: `${path} 0.8s infinite linear alternate, ${transform} 1.6s infinite linear`,
  }) as const satisfies ThemeUIStyleObject;

export const Spinner = (props: SpinnerProps) => (
  <div sx={getSpinnerCss(props)} aria-description="Loading..." />
);
