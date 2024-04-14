import type { StylePropertyValue } from 'theme-ui';
import type { Property } from 'csstype';
import type { ThemeColor, ThemeSize } from '@waystone/theme';
import type {
  Literal,
  ExtractLiteralsForAutocomplete,
  OneOrMore,
} from './utils';

export type LiteralAttribute<
  TStyleProperty,
  TValue extends Literal,
> = ExtractLiteralsForAutocomplete<StylePropertyValue<TStyleProperty>, TValue>;

export type VariantAttributes<T extends string> = {
  variant?: T;
};

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
