import type { colors } from './colors';
import type { layouts } from './layouts';
import type { styles } from './styles';

export type ThemeColor = Exclude<keyof typeof colors, 'modes'>;

export type ThemeSpacing = keyof typeof layouts.space;

export type ThemeRadius = keyof typeof layouts.radii;

export type ThemeShadow = keyof typeof styles.shadows;

export type ThemeZIndex = keyof typeof layouts.zIndices;

export type ThemeSize = keyof typeof styles.sizes;
