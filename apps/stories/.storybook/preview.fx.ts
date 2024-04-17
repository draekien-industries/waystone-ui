import { waystoneTheme } from '@waystone/theme';

export const getThemeColors = () =>
  Object.keys(waystoneTheme.colors!).filter((c) => c !== 'modes');

export const getThemeColorsSummary = () => getThemeColors().join(',');

export const getThemeTextVariants = () => Object.keys(waystoneTheme.text!);

export const getThemeTextVariantsSummary = () =>
  getThemeTextVariants().join('|');

export const getThemeSpaces = () => Object.keys(waystoneTheme.space);