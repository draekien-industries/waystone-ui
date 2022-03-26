import { WaystoneBaseTheme } from '@waystone/core';

export const getThemeTextVariants = () => Object.keys(WaystoneBaseTheme.text);
export const getThemeTextVariantsSummary = () =>
  getThemeTextVariants().join('|');
