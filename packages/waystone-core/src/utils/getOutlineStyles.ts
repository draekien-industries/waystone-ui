import { alpha } from '@theme-ui/color';
import type { ThemeUIStyleObject } from 'theme-ui';

const outlineColor = 'info-300';

const base: ThemeUIStyleObject = {
  outlineColor: alpha(outlineColor, 0),
  outlineWidth: 4,
  outlineStyle: 'solid',
  outlineOffset: 2,
} as const;

const focusedOutline: ThemeUIStyleObject = {
  outlineColor: alpha(outlineColor, 0.5),
} as const;

const focused = {
  ':enabled:not(active):focus-visible': focusedOutline,
} as const;

const activeOutline: ThemeUIStyleObject = {
  outlineColor: alpha(outlineColor, 0),
} as const;

const active = {
  ':enabled:active': activeOutline,
} as const;

export const getOutlineCss = () => ({
  base,
  focused,
  active,
});

export const outlineCss = {
  base,
  focused,
  active,
} as const;