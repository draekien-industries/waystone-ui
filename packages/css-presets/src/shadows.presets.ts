import type { ThemeUICSSObject } from 'theme-ui';

const none: ThemeUICSSObject = {
  boxShadow: 'none',
} as const;

const base: ThemeUICSSObject = {
  boxShadow: 'small',
} as const;

const focused: ThemeUICSSObject = {
  boxShadow: 'medium',
} as const;

const active: ThemeUICSSObject = {
  boxShadow: 'medium',
} as const;

export const boxShadowCss = {
  none,
  base,
  focused,
  active,
} as const;
