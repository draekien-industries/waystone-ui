import { ColorScale } from '@waystone/color';

export const info = {
  'info-50': '#ebf8fe',
  'info-100': '#d3effd',
  'info-200': '#9ddcfb',
  'info-300': '#53c1f8',
  'info-400': '#099de7',
  'info-500': '#066798',
  'info-600': '#055d89',
  'info-700': '#055076',
  'info-800': '#044362',
  'info-900': '#022b40',
  'info-950': '#021b27',
} as const satisfies ColorScale<'info'>;

export default info;
