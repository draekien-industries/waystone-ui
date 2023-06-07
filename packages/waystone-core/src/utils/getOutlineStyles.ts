import { alpha } from '@theme-ui/color';
import { ThemeUIStyleObject } from 'theme-ui';

export const getOutlineCss = () => {
  const outlineColor = 'info-300';

  const base: ThemeUIStyleObject = {
    outlineColor: alpha(outlineColor, 0),
    outlineWidth: 4,
    outlineStyle: 'solid',
    outlineOffset: 2,
  };

  const focused = {
    ':enabled:not(active):focus': {
      outlineColor: alpha(outlineColor, 0.5),
    },
  };

  const active = {
    ':enabled:active': {
      outlineColor: alpha(outlineColor, 0),
    },
  };

  return {
    base,
    focused,
    active,
  };
};
