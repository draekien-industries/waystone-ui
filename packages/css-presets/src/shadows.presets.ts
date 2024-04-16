import type { ThemeUIStyleObject } from 'theme-ui';

const none: ThemeUIStyleObject = {
  boxShadow: 'none',
} as const;

const base: ThemeUIStyleObject = {
  boxShadow: 'sm',
} as const;

const focused: ThemeUIStyleObject = {
  boxShadow: 'md',
} as const;

const active: ThemeUIStyleObject = {
  boxShadow: 'sm',
} as const;

export const boxShadowCss = {
  none,
  base,
  focused,
  active,
} as const;
