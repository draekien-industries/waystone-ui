import { HexColor } from '../schemas';
import { getLuminanceFromRbg } from './getLuminanceFromRgb';
import { hexToRgb } from './hexToRgb';
import { precisionRound } from './precisionRound';

export const getLuminanceFromHex = (hex: HexColor) => {
  const rgb = hexToRgb(hex);
  const luminance = getLuminanceFromRbg({ ...rgb });

  return precisionRound(luminance, 2);
};
