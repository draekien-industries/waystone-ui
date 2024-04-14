import { ColorScale } from '@waystone/color';

export const p = {
  'p-50': '#f4f9fa',
  'p-100': '#e2eff3',
  'p-200': '#c6dfe7',
  'p-300': '#a5ccd9',
  'p-400': '#7ab4c7',
  'p-500': '#4893ac',
  'p-600': '#42879e',
  'p-700': '#3b788c',
  'p-800': '#2f5f6f',
  'p-900': '#21444f',
  'p-950': '#1a343d',
} as const satisfies ColorScale<'p'>;

export default p;
