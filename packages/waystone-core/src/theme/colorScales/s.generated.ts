import { ColorScale } from '@waystone/color';

export const s = {
  's-50': '#f9f5fa',
  's-100': '#f4eef6',
  's-200': '#e8daec',
  's-300': '#dbc5e2',
  's-400': '#cdaed6',
  's-500': '#ba8fc7',
  's-600': '#af7ebe',
  's-700': '#a26ab4',
  's-800': '#8d509f',
  's-900': '#663a73',
  's-950': '#42264b',
} as const satisfies ColorScale<'s'>;

export default s;
