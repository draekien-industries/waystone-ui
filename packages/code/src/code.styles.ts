import type { ThemeUICSSObject } from 'theme-ui';

export const codeCss = {
  variant: 'text.mono',
  fontSize: '1em',
  fontWeight: 'medium',
  backgroundColor: 'ghost',
  borderRadius: 'small',
  paddingX: 'extra-small',
  paddingY: 2,
  color: 'code',
} as const satisfies ThemeUICSSObject;
