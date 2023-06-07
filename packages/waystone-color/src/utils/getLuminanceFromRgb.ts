import { RgbColor, rgbSchema } from '../schemas';

export const getLuminanceFromRbg = (rgb: RgbColor) => {
  const { r, g, b } = rgbSchema.parse(rgb);

  const [R, G, B] = [r, g, b].map((c) => {
    const range = c / 255;

    return range < 0.03928 ? range / 12.92 : ((range + 0.055) / 1.055) ** 2.4;
  });

  const luminance = 21.26 * R + 71.52 * G + 7.22 * B;

  return luminance;
};
