import { ColorScale } from '@waystone/color';

export const a = {
  'a-50': '#ebf9ff',
  'a-100': '#dbf5ff',
  'a-200': '#ade8ff',
  'a-300': '#7ad9ff',
  'a-400': '#33c5ff',
  'a-500': '#00a8eb',
  'a-600': '#009ad6',
  'a-700': '#0087bd',
  'a-800': '#00719e',
  'a-900': '#005070',
  'a-950': '#003347',
} as const satisfies ColorScale<'a'>;

export default a;
