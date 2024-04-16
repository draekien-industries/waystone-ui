import type { ThemeUIStyleObject } from 'theme-ui';

export const disabledCss: ThemeUIStyleObject = {
  color: 'b-400',
  cursor: 'not-allowed',
} as const;

export const disabledWithBackgroundCss: ThemeUIStyleObject = {
  ...disabledCss,
  backgroundColor: 'muted',
} as const;
