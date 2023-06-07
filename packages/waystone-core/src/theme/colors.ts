import { createColorScale } from '@waystone/color';

export const STARTING_COLORS = {
  primary: '#4995ae',
  secondary: '#ba90c7',
  accent: '#00a9ed',
  highlight: '#ed6f22',
} as const;

export const primaryScale = createColorScale({
  name: 'p',
  midPoint: '#4995ae',
});

export const secondaryScale = createColorScale({
  name: 's',
  midPoint: '#ba90c7',
});

export const accentScale = createColorScale({ name: 'a', midPoint: '#00a9ed' });

export const highlightScale = createColorScale({
  name: 'h',
  midPoint: '#ed6f22',
});

export const greyScale = createColorScale({
  name: 'b',
  midPoint: '#666666',
});

export const infoScale = createColorScale({
  name: 'info',
  midPoint: '#066899',
});

export const successScale = createColorScale({
  name: 'success',
  midPoint: '#2B8D4B',
});

export const warningScale = createColorScale({
  name: 'warning',
  midPoint: '#EA4318',
});

export const errorScale = createColorScale({
  name: 'error',
  midPoint: '#E00027',
});

export const colors = {
  ...STARTING_COLORS,
  text: '#1A1A1A',
  background: '#F4F9FA',
  muted: '#B8B8B8',
  ghost: '#EBEBEB',
  modes: {
    dark: {
      text: '#F4F9FA',
      background: '#1A1A1A',
      muted: '#5E5E5E',
      ghost: '#404040',
    },
  },
  ...primaryScale,
  ...secondaryScale,
  ...accentScale,
  ...highlightScale,
  ...greyScale,
  ...infoScale,
  ...warningScale,
  ...errorScale,
  ...successScale,
} as const;

export default colors;
