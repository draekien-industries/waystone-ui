import { ColorScale } from '@waystone/color';

export const h = {
  'h-50': '#fef6f1',
  'h-100': '#fdede3',
  'h-200': '#fad7c2',
  'h-300': '#f7bc97',
  'h-400': '#f39d68',
  'h-500': '#ed6f21',
  'h-600': '#de6012',
  'h-700': '#c15410',
  'h-800': '#a0460d',
  'h-900': '#76330a',
  'h-950': '#502307',
} as const satisfies ColorScale<'h'>;

export default h;
