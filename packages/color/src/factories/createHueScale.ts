import { COLOR_STOPS } from '../constants';

export const createHueScale = (hueOffset = 0) =>
  COLOR_STOPS.map((stop) => {
    const diff = Math.abs(COLOR_STOPS.indexOf(stop) - COLOR_STOPS.indexOf(500));
    const offsetValue = hueOffset ? (diff + 1) * hueOffset - hueOffset : 0;

    if (offsetValue < 0) {
      return { stop, offset: 360 + offsetValue };
    }

    if (offsetValue > 360) {
      return { stop, offset: offsetValue - 360 };
    }

    return { stop, offset: offsetValue };
  });
