import { ColorScale } from '@waystone/color';

export const warning = {
  'warning-50': '#fef4f1',
  'warning-100': '#fce8e3',
  'warning-200': '#fad1c7',
  'warning-300': '#f6af9d',
  'warning-400': '#f18569',
  'warning-500': '#ea441a',
  'warning-600': '#d23913',
  'warning-700': '#bb3311',
  'warning-800': '#9f2b0e',
  'warning-900': '#6c1d0a',
  'warning-950': '#4b1407',
} as const satisfies ColorScale<'warning'>;

export default warning;
