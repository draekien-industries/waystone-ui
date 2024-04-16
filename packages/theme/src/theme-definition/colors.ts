import { p, s, a, h, b, info, success, warning, error } from './colorScales';

export const STARTING_COLORS = {
  primary: '#4995ae',
  secondary: '#ba90c7',
  accent: '#00a9ed',
  highlight: '#ed6f22',
} as const;

export const colors = {
  ...STARTING_COLORS,
  text: b['b-950'],
  background: p['p-50'],
  muted: b['b-300'],
  ghost: b['b-100'],
  modes: {
    dark: {
      text: p['p-200'],
      background: b['b-950'],
      muted: b['b-600'],
      ghost: b['b-800'],
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
