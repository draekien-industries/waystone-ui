import { ColorScale } from '@waystone/color';

export const b = {
  'b-50': '#f5f5f5',
  'b-100': '#ebebeb',
  'b-200': '#d4d4d4',
  'b-300': '#b8b8b8',
  'b-400': '#969696',
  'b-500': '#666666',
  'b-600': '#5e5e5e',
  'b-700': '#4f4f4f',
  'b-800': '#404040',
  'b-900': '#303030',
  'b-950': '#1a1a1a',
} as const satisfies ColorScale<'b'>;

export default b;
