import type { HslColor } from '../schemas';
import { getLuminanceFromRbg } from './getLuminanceFromRgb';
import { hslToRgb } from './hslToRgb';

export const getLightnessFromHSLuminance = (hsl: HslColor) => {
  let vals: Record<number, number> = {};

  // eslint-disable-next-line no-plusplus
  for (let L = 99; L >= 0; L--) {
    const rgb = hslToRgb({ ...hsl, l: L });
    const luminance = getLuminanceFromRbg(rgb);
    vals = {
      ...vals,
      [L]: Math.abs(hsl.l - luminance),
    };
  }

  let lowestDiff = 100;
  let newL = 100;
  // eslint-disable-next-line no-plusplus
  for (let i = Object.keys(vals).length - 1; i >= 0; i--) {
    if (vals[i] < lowestDiff) {
      newL = i;
      lowestDiff = vals[i];
    }
  }

  return newL;
};
