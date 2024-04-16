import { ColorScale } from '@waystone/color';

export const success = {
  'success-50': '#ebf9f0',
  'success-100': '#d8f3e1',
  'success-200': '#a9e5bd',
  'success-300': '#6ed390',
  'success-400': '#38b863',
  'success-500': '#2b8d4b',
  'success-600': '#267d43',
  'success-700': '#216d3b',
  'success-800': '#1b5a30',
  'success-900': '#144224',
  'success-950': '#0d2b17',
} as const satisfies ColorScale<'success'>;

export default success;
