import type { WaystoneTheme } from '../theme';

export type MakeThemeFn = <T extends WaystoneTheme>(theme: T) => T;

export const makeTheme: MakeThemeFn = <T extends WaystoneTheme>(theme: T) =>
  theme;
