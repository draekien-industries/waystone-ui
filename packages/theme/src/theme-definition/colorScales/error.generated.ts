import { ColorScale } from '@waystone/color';

export const error = {
  'error-50': '#fff5f7',
  'error-100': '#ffe5ea',
  'error-200': '#ffc7d0',
  'error-300': '#ffa3b3',
  'error-400': '#ff6b84',
  'error-500': '#e00025',
  'error-600': '#cc0022',
  'error-700': '#b8001f',
  'error-800': '#8f0018',
  'error-900': '#660011',
  'error-950': '#57000e',
} as const satisfies ColorScale<'error'>;

export default error;
