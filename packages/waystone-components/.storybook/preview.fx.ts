import { WaystoneBaseTheme } from '@waystone/core';

export const getThemeColors = () =>
  Object.keys(WaystoneBaseTheme.colors!).filter((c) => c !== 'modes');

export const getThemeColorsSummary = () => getThemeColors().join(',');

export const getThemeTextVariants = () => Object.keys(WaystoneBaseTheme.text!);

export const getThemeTextVariantsSummary = () =>
  getThemeTextVariants().join('|');
