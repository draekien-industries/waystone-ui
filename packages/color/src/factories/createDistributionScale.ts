import { COLOR_STOPS } from '../constants';

export const createDistributionScale = (
  luminance: number,
  min = 0,
  max = 100
) => {
  const midPoint = 500;

  const values = [
    { stop: 0, offset: max },
    { stop: midPoint, offset: luminance },
    { stop: 1000, offset: min },
  ];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < COLOR_STOPS.length; i++) {
    const stopValue = COLOR_STOPS[i];

    if (stopValue === 0 || stopValue === midPoint || stopValue === 1000) {
      // eslint-disable-next-line no-continue
      continue;
    }

    const diff = Math.abs((stopValue - midPoint) / 100);
    const totalDiff =
      stopValue < midPoint
        ? Math.abs(
            COLOR_STOPS.indexOf(midPoint) - COLOR_STOPS.indexOf(COLOR_STOPS[0])
          ) - 1
        : Math.abs(
            COLOR_STOPS.indexOf(midPoint) -
              COLOR_STOPS.indexOf(COLOR_STOPS[COLOR_STOPS.length - 1])
          ) - 1;

    const increment = stopValue < midPoint ? max - luminance : luminance - min;

    const offset =
      stopValue < midPoint
        ? (increment / totalDiff) * diff + luminance
        : luminance - (increment / totalDiff) * diff;

    values.push({ stop: stopValue, offset: Math.round(offset) });
  }

  values.sort((a, b) => a.stop - b.stop);

  return values;
};
