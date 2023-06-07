import { ThemeColorStop } from '../constants';
import { HexColor, Percentage } from '../schemas';
import {
  getLightnessFromHSLuminance,
  getLuminanceFromHex,
  hexToHsl,
  hslToHex,
} from '../utils';
import { createDistributionScale } from './createDistributionScale';
import { createHueScale } from './createHueScale';
import { createSaturationScale } from './createSaturationScale';

export type ColorScaleOptions<TName extends string> = {
  name: TName;
  midPoint: HexColor;
  hueOffset?: number;
  saturationOffset?: number;
  luminanceMin?: Percentage;
  luminanceMax?: Percentage;
};

export type ColorScaleKey<TName extends string> = `${TName}-${ThemeColorStop}`;

export type ColorScale<TName extends string> = {
  [Key in ColorScaleKey<TName>]: string;
};

/**
 * Creates a tailwindcss style color scale based on the hex value provided.
 * The hex color you provide will be used as the midpoint of your color scale.
 * @see https://github.com/SimeonGriggs/tints.dev/tree/main/app/lib
 * @param colorScaleOptions the options used the generate the scale
 * @returns the color scale
 */
export const createColorScale = <TName extends string>({
  name,
  midPoint,
  hueOffset = 0,
  saturationOffset = 0,
  luminanceMin = 0,
  luminanceMax = 100,
}: ColorScaleOptions<TName>): ColorScale<TName> => {
  const hueScale = createHueScale(hueOffset);
  const saturationScale = createSaturationScale(saturationOffset);

  const luminance = getLuminanceFromHex(midPoint);

  const { h, s } = hexToHsl(midPoint);

  const distributionScale = createDistributionScale(
    luminance,
    luminanceMin,
    luminanceMax
  );

  const colorScaleArray = hueScale.map(({ stop }, index) => {
    if (stop === 0 || stop === 1000) return {};

    const H = h + hueScale[index].offset;
    const S = s + saturationScale[index].offset;
    const L = getLightnessFromHSLuminance({
      h: H,
      s: S,
      l: distributionScale[index].offset,
    });

    const hex = hslToHex({ h: H, s: S, l: L });
    const colorScaleKey: ColorScaleKey<TName> = `${name}-${stop}`;

    return {
      [colorScaleKey]: hex,
    };
  });

  const result = {};

  colorScaleArray.forEach((item) => {
    Object.assign(result, item);
  });

  return result as ColorScale<TName>;
};
