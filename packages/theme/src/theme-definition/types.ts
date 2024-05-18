import type { themeColors } from './colors';
import type { layouts } from './layouts';
import type { styles } from './styles';
import type { typography } from './typography';
import type { variants } from './variants';

export type ThemeColor = keyof typeof themeColors;

export type ThemeSpacing = keyof typeof layouts.space;

export type ThemeRadius = keyof typeof layouts.radii;

export type ThemeShadow = keyof typeof styles.shadows;

export type ThemeZIndex = keyof typeof layouts.zIndices;

export type ThemeSize = keyof typeof styles.sizes;

export type ThemeFontSize = keyof typeof typography.fontSizes;

export type ThemeFontVariants = Exclude<keyof typeof variants.text, 'default'>;
