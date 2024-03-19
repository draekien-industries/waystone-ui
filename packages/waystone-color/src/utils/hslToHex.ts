import type { HexColor, HslColor } from '../schemas';
import { hslToRgb } from './hslToRgb';

export const hslToHex = (hsl: HslColor): HexColor => {
  const parsed = hslToRgb(hsl);

  let r = parsed.r.toString(16);
  let g = parsed.g.toString(16);
  let b = parsed.b.toString(16);

  // Prepend 0s, if necessary
  if (r.length === 1) r = `0${r}`;
  if (g.length === 1) g = `0${g}`;
  if (b.length === 1) b = `0${b}`;

  return `#${r}${g}${b}`;
};
