import { WaystoneTheme } from '..';
import { colors, layouts, styles } from '../theme';

/** The colors available in the base theme. */
export type ThemeColor = keyof typeof colors;

/** The color that is computed using the theme. */
export type ComputedColor = (t: WaystoneTheme) => string;

/** The spacings available in the base theme. */
export type Spacing = keyof typeof layouts.space;

/** The radii available in the base theme. */
export type Radius = keyof typeof layouts.radii;

/** The shadows available in the base theme. */
export type Shadow = keyof typeof styles.shadows;

/** The zIndexes available in the base theme. */
export type ZIndex = keyof typeof layouts.zIndices;

/** The sizes available in the base theme. */
export type ThemeSize = keyof typeof styles.sizes;
