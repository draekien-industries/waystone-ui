import { cssSelectors, outlineCss } from '@waystone/css-presets';
import type { ThemeUICSSObject } from 'theme-ui';

export const containerCss = {
  gap: 'small',
} as const satisfies ThemeUICSSObject;

export const inputCss: ThemeUICSSObject = {
  position: 'relative',
  height: '1.25rem',
  width: '1.25rem',
  cursor: 'pointer',
  ...outlineCss.base,
  ':after': {
    content: '""',
    inset: -6,
    borderRadius: '50%',
    position: 'absolute',
    border: '4px solid',
    borderColor: 'transparent',
    transition: 'border-color 200ms',
  },
  [cssSelectors.focusVisible]: {
    ':after': {
      borderColor: outlineCss.focused.outlineColor,
    },
  },
  [cssSelectors.active]: {
    ':after': {
      borderColor: outlineCss.active.outlineColor,
    },
  },
  [cssSelectors.disabled]: {
    cursor: 'not-allowed',
  },
} as const;

export const labelCss = {
  cursor: 'pointer',
  [cssSelectors.disabled]: {
    cursor: 'not-allowed',
  },
} as const satisfies ThemeUICSSObject;
