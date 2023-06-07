export const THEME_COLOR_STOPS = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
] as const;

export const COLOR_STOPS = [0, ...THEME_COLOR_STOPS, 1000] as const;

export type ColorStop = typeof COLOR_STOPS[number];
export type ThemeColorStop = typeof THEME_COLOR_STOPS[number];
