import type { ThemeUIStyleObject } from 'theme-ui';

const none: ThemeUIStyleObject = {
  boxShadow: 'none',
} as const;

const base: ThemeUIStyleObject = {
  boxShadow: 'small',
} as const;

const focused: ThemeUIStyleObject = {
  boxShadow: 'medium',
} as const;

const active: ThemeUIStyleObject = {
  boxShadow: 'medium',
} as const;

export const boxShadowCss = {
  none,
  base,
  focused,
  active,
} as const;
