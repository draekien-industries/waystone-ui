import type { StylePropertyValue } from 'theme-ui';
import type { Property } from 'csstype';
import type { Size, SizeExtended } from '../constants';
import type { WaystoneTheme, layouts, styles, variants } from '../theme';
import { colors } from '../theme';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { modes, ...colorsOnly } = colors;

export { colorsOnly };
/** The colors available in the base theme. */
export type ThemeColor = keyof typeof colorsOnly;

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

/** Literal types */
export type Literal = string | number | symbol;

/** Omits literals from style property value so they show up in autocomplete */
export type ExtractLiteralsForAutocomplete<
  TStylePropertyValue extends StylePropertyValue<unknown>,
  TLiteral extends Literal,
> = TLiteral | Omit<TStylePropertyValue, TLiteral>;

/** Converts a type into an union of its own type and an array of its type */
export type OneOrMore<T> = T | Array<T>;

export type SizeAttributes = { size?: Size };

export type ExtendedSizeAttributes = { size?: SizeExtended };

export type VariantAttributes<T extends string> = {
  variant?: T;
};

export type LiteralAttribute<
  TStyleProperty,
  TValue extends Literal,
> = ExtractLiteralsForAutocomplete<StylePropertyValue<TStyleProperty>, TValue>;

export type WidthAttributes = {
  width?: OneOrMore<
    LiteralAttribute<Property.Width<string | number>, ThemeSize>
  >;
  minWidth?: OneOrMore<
    LiteralAttribute<Property.MinWidth<string | number>, ThemeSize>
  >;
  maxWidth?: OneOrMore<
    LiteralAttribute<Property.MaxWidth<string | number>, ThemeSize>
  >;
};

export type FullWidthAttributes = {
  fullWidth?: boolean;
};

export type HeightAttributes = {
  height?: OneOrMore<
    LiteralAttribute<Property.Height<string | number>, ThemeSize>
  >;
  minHeight?: OneOrMore<
    LiteralAttribute<Property.MinHeight<string | number>, ThemeSize>
  >;
  maxHeight?: OneOrMore<
    LiteralAttribute<Property.MaxHeight<string | number>, ThemeSize>
  >;
};

export type DimensionsAttributes = WidthAttributes & HeightAttributes;

export type ColorAttributes = {
  color?: LiteralAttribute<Property.Color, ThemeColor>;
};

export type BackgroundColorAttributes = {
  backgroundColor?: LiteralAttribute<Property.BackgroundColor, ThemeColor>;
};

export type BackgroundImageAttributes = {
  backgroundImage?: StylePropertyValue<Property.BackgroundImage>;
  backgroundSize?: StylePropertyValue<Property.BackgroundSize>;
};

export type DisabledAttributes = {
  disabled?: boolean;
};

export type LoadingAttributes = {
  loading?: boolean;
};

export type ActiveAttributes = {
  active?: boolean;
};
