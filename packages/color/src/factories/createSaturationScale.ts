import { COLOR_STOPS } from '../constants';

export const createSaturationScale = (saturationOffset = 0) =>
  COLOR_STOPS.map((stop) => {
    const diff = Math.abs(COLOR_STOPS.indexOf(stop) - COLOR_STOPS.indexOf(500));
    const offsetValue = saturationOffset
      ? Math.round((diff + 1) * saturationOffset * (1 + diff / 10))
      : 0;

    if (offsetValue > 100) {
      return { stop, offset: 100 };
    }

    return { stop, offset: offsetValue };
  });
