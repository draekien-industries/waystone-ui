import { alpha } from '@theme-ui/color';
import type { ThemeUIStyleObject } from 'theme-ui';

const outlineColor = 'info-300';

const base: ThemeUIStyleObject = {
  outlineColor: alpha(outlineColor, 0),
  outlineWidth: 4,
  outlineStyle: 'solid',
  outlineOffset: 2,
};

const focusedOutline: ThemeUIStyleObject = {
  outlineColor: alpha(outlineColor, 0.5),
};

const focused = {
  ':enabled:not(active):focus-visible': focusedOutline,
};

const activeOutline: ThemeUIStyleObject = {
  outlineColor: alpha(outlineColor, 0),
};

const active = {
  ':enabled:active': activeOutline,
};

export const getOutlineCss = () => ({
  base,
  focused,
  active,
});
