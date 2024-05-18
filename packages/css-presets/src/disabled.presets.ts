import type { ThemeUICSSObject } from 'theme-ui';

export const disabledCss: ThemeUICSSObject = {
  color: 'text-disabled',
  cursor: 'not-allowed',
} as const;

export const disabledWithBackgroundCss: ThemeUICSSObject = {
  ...disabledCss,
  backgroundColor: 'muted',
} as const;
