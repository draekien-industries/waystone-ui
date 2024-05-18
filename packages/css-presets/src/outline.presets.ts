import { alpha } from '@theme-ui/color';
import type { ThemeUICSSObject } from 'theme-ui';

const outlineColor = 'info-300';

const base: ThemeUICSSObject = {
  outlineColor: alpha(outlineColor, 0),
  outlineWidth: 4,
  outlineStyle: 'solid',
  outlineOffset: 2,
} as const;

const focused: ThemeUICSSObject = {
  outlineColor: alpha(outlineColor, 0.5),
} as const;

const active: ThemeUICSSObject = {
  outlineColor: alpha(outlineColor, 0),
} as const;

export const outlineCss = {
  base,
  focused,
  active,
} as const;
