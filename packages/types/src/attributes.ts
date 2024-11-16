import type {
  ThemeColor,
  ThemeShadow,
  ThemeSize,
  ThemeSpacing,
} from '@waystone/theme';
import type { Property } from 'csstype';
import type { StylePropertyValue } from 'theme-ui';
import type {
  ExtractLiteralsForAutocomplete,
  Literal,
  OneOrMore,
} from './utils';

/** Applies literal value autocomplete onto a style property */
export type LiteralAttribute<
  TStyleProperty,
  TValue extends Literal,
> = ExtractLiteralsForAutocomplete<StylePropertyValue<TStyleProperty>, TValue>;

export type VariantAttributes<T extends string> = {
  /** Instructs the component to render a specific variant */
  variant?: T;
};

export type WidthAttributes = {
  /** Sets the `width` css property, allowing for autocomplete of theme presets */
  width?: OneOrMore<
    LiteralAttribute<Property.Width<string | number>, ThemeSize>
  >;
  /** Sets the `min-width` css property, allowing for autocomplete of theme presets */
  minWidth?: OneOrMore<
    LiteralAttribute<Property.MinWidth<string | number>, ThemeSize>
  >;
  /** Sets the `max-width` css property, allowing for autocomplete of theme presets */
  maxWidth?: OneOrMore<
    LiteralAttribute<Property.MaxWidth<string | number>, ThemeSize>
  >;
};

export type FullWidthAttributes = {
  /** Instructs the component to render with the `width` css property set to `100%` */
  fullWidth?: boolean;
};

export type HeightAttributes = {
  /** Sets the `height` css property, allowing for autocomplete of theme presets */
  height?: OneOrMore<
    LiteralAttribute<Property.Height<string | number>, ThemeSize>
  >;
  /** Sets the `min-height` css property, allowing for autocomplete of theme presets */
  minHeight?: OneOrMore<
    LiteralAttribute<Property.MinHeight<string | number>, ThemeSize>
  >;
  /** Sets the `max-height` css property, allowing for autocomplete of theme presets */
  maxHeight?: OneOrMore<
    LiteralAttribute<Property.MaxHeight<string | number>, ThemeSize>
  >;
};

export type DimensionsAttributes = WidthAttributes & HeightAttributes;

export type PaddingAttributes = {
  /** Sets the `padding` css property, allowing for autocomplete of theme presets */
  padding?: OneOrMore<
    LiteralAttribute<Property.Padding<string | number>, ThemeSpacing>
  >;
  /** An alias for setting `padding-top` and `padding-bottom` to the same value, allowing for autocomplete of theme presets */
  paddingX?: OneOrMore<
    LiteralAttribute<Property.PaddingTop<string | number>, ThemeSpacing>
  >;
  /** An alias for setting `padding-right` and `padding-left` to the same value, allowing for autocomplete of theme presets */
  paddingY?: OneOrMore<
    LiteralAttribute<Property.PaddingRight<string | number>, ThemeSpacing>
  >;
  /** Sets the `padding-top` css property, allowing for autocomplete of theme presets */
  paddingTop?: OneOrMore<
    LiteralAttribute<Property.PaddingTop<string | number>, ThemeSpacing>
  >;
  /** Sets the `padding-bottom` css property, allowing for autocomplete of theme presets */
  paddingBottom?: OneOrMore<
    LiteralAttribute<Property.PaddingBottom<string | number>, ThemeSpacing>
  >;
  /** Sets the `padding-right` css property, allowing for autocomplete of theme presets */
  paddingRight?: OneOrMore<
    LiteralAttribute<Property.PaddingLeft<string | number>, ThemeSpacing>
  >;
  /** Sets the `padding-left` css property, allowing for autocomplete of theme presets */
  paddingLeft?: OneOrMore<
    LiteralAttribute<Property.PaddingRight<string | number>, ThemeSpacing>
  >;
};

export type BoxShadowAttributes = {
  /** Sets the `box-shadow` css property, allowing for autocomplete of theme presets */
  boxShadow?: OneOrMore<LiteralAttribute<Property.BoxShadow, ThemeShadow>>;
};

export type ColorAttributes = {
  /** Sets the `color` css property, allowing for autocomplete of theme presets */
  color?: LiteralAttribute<Property.Color, ThemeColor>;
};

export type BackgroundColorAttributes = {
  /** Sets the `background-color` css property, allowing for autocomplete of theme presets */
  backgroundColor?: LiteralAttribute<Property.BackgroundColor, ThemeColor>;
};

export type BackgroundImageAttributes = {
  /** Sets the `background-image` css proeprty */
  backgroundImage?: StylePropertyValue<Property.BackgroundImage>;
  /** Sets the `background-size` css property */
  backgroundSize?: StylePropertyValue<Property.BackgroundSize>;
};

export type DisabledAttributes = {
  /** Instructs the component to render in a disabled state */
  disabled?: boolean;
};

export type LoadingAttributes = {
  /** Instructs the component to render in a loading state */
  loading?: boolean;
};

export type ActiveAttributes = {
  /** Instructs the component to render in an active state */
  active?: boolean;
};

export type SizeAttributes<T extends ThemeSize = ThemeSize> = {
  /** Instructs the component to render at a specific size */
  size?: T;
};

export type TestIdAttributes = {
  'data-testid'?: string;
};
