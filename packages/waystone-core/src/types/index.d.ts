import { WaystoneTheme } from '..';
import { colors, layouts, styles } from '../theme';
/** A common set of sizes. */
export declare type Size = 'sm' | 'md' | 'lg';
/** An extended set of sizes. */
export declare type SizeExtended = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
/** The horizontal alignment of content. */
export declare type HorizontalAlignment = 'left' | 'center' | 'right';
/** The vertical alignment of content. */
export declare type VerticalAlignment = 'top' | 'center' | 'bottom';
/** The colors available in the base theme. */
export declare type ThemeColor = keyof typeof colors;
/** The color that is computed using the theme. */
export declare type ComputedColor = (t: WaystoneTheme) => string;
/** The spacings available in the base theme. */
export declare type Spacing = keyof typeof layouts.space;
/** The radii available in the base theme. */
export declare type Radius = keyof typeof layouts.radii;
/** The shadows available in the base theme. */
export declare type Shadow = keyof typeof styles.shadows;
/** The zIndexes available in the base theme. */
export declare type ZIndex = keyof typeof layouts.zIndices;
/** The sizes available in the base theme. */
export declare type ThemeSize = keyof typeof styles.sizes;
/** The text variants available in the base theme. */
export declare type TextVariant = 'hero' | 'heading' | 'title' | 'subtitle' | 'eyebrow' | 'body' | 'caption' | 'small' | 'monospace';
/** The status variants available in the base theme. */
export declare type StatusVariant = 'info' | 'warning' | 'error' | 'success';
//# sourceMappingURL=index.d.ts.map