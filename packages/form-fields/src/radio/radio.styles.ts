import { cssSelectors } from '@waystone/css-presets';
import type { ThemeUICSSObject } from 'theme-ui';

export const containerCss = {
  gap: 'small',
} as const satisfies ThemeUICSSObject;

export const inputCss = {
  height: '1.25rem',
  width: '1.25rem',
  cursor: 'pointer',
  [cssSelectors.disabled]: {
    cursor: 'not-allowed',
  },
} as const satisfies ThemeUICSSObject;

export const labelCss = {
  cursor: 'pointer',
  [cssSelectors.disabled]: {
    cursor: 'not-allowed',
  },
} as const satisfies ThemeUICSSObject;
