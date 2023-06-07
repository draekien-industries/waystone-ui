import { HexColor, hexSchema, RgbColor } from '../schemas';

/* eslint-disable no-bitwise */
export const hexToRgb = (hex: HexColor): RgbColor => {
  const parsed = hexSchema.parse(hex);

  const cleanHex = parsed.replace(/[^0-9A-F]/gi, '');
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return { r, g, b };
};
