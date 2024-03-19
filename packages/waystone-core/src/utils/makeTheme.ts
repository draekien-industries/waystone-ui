import type { WaystoneTheme } from '../theme';

export const makeTheme = <T extends WaystoneTheme>(theme: T): T => theme;
