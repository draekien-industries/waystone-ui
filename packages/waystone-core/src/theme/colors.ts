import { p, s, a, h, b, info, success, warning, error } from './colorScales';

export const STARTING_COLORS = {
  primary: '#4995ae',
  secondary: '#ba90c7',
  accent: '#00a9ed',
  highlight: '#ed6f22',
} as const;

export const colors = {
  ...STARTING_COLORS,
  text: '#1A1A1A',
  background: '#F4F9FA',
  muted: '#B8B8B8',
  ghost: '#EBEBEB',
  modes: {
    dark: {
      text: '#C6DFE7',
      background: '#1A1A1A',
      muted: '#5E5E5E',
      ghost: '#404040',
    },
  },
  ...p,
  ...s,
  ...a,
  ...h,
  ...b,
  ...info,
  ...warning,
  ...error,
  ...success,
} as const;

export default colors;
