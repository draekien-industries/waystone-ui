import type { Size, SizeExtended, ThemeColor, ThemeSize } from '@waystone/core';
import type { StylePropertyValue } from '@theme-ui/css';

import type { Property } from 'csstype';
import type * as React from 'react';
import type { ExtractLiteralsForAutocomplete, OneOrMore } from './types';

/** This component supports child components. */
export type HasChildren = {
  /** The child components to render. */
  children?: React.ReactNode;
};

/** This component supports different variants. */
export type HasVariant<T> = {
  /** The supported variants. */
  variant?: T;
};

/** This component supports different sizes. */
export type HasSize = {
  /** The size to render. */
  size?: Size;
};

/** This components supports an extended list of sizes. */
export type HasExtendedSize = {
  /** The size to render. */
  size?: SizeExtended;
};

/** This component supports a specific width. */
export type HasWidth = {
  /**
   * The width of the component.
   * Use an array to take advantage of ThemeUI breakpoints.
   */
  width?: OneOrMore<
    ExtractLiteralsForAutocomplete<
      StylePropertyValue<Property.Width<string | number>>,
      ThemeSize
    >
  >;
  /**
   * The minimum width of the component.
   * Use an array to take advantage of ThemeUI breakpoints.
   */
  minWidth?: OneOrMore<
    ExtractLiteralsForAutocomplete<
      StylePropertyValue<Property.MinWidth<string | number>>,
      ThemeSize
    >
  >;
  /**
   * The maximum width of the component.
   * Use an array to take advantage of ThemeUI breakpoints.
   */
  maxWidth?: OneOrMore<
    ExtractLiteralsForAutocomplete<
      StylePropertyValue<Property.MaxWidth<string | number>>,
      ThemeSize
    >
  >;
};

/** This component supports a specific height. */
export type HasHeight = {
  /**
   * The height of the component.
   * Use an array to take advantage of ThemeUI breakpoints.
   */
  height?: OneOrMore<
    ExtractLiteralsForAutocomplete<
      StylePropertyValue<Property.Height<string | number>>,
      ThemeSize
    >
  >;
  /**
   * The minimum height of the component.
   * Use an array to take advantage of ThemeUI breakpoints.
   */
  minHeight?: OneOrMore<
    ExtractLiteralsForAutocomplete<
      StylePropertyValue<Property.MinHeight<string | number>>,
      ThemeSize
    >
  >;
  /**
   * The maximum height of the component.
   * Use an array to take advantage of ThemeUI breakpoints.
   */
  maxHeight?: OneOrMore<
    ExtractLiteralsForAutocomplete<
      StylePropertyValue<Property.MaxHeight<string | number>>,
      ThemeSize
    >
  >;
};

/**
 * This component supports both a specific height and width.
 * @extends HasWidth
 * @extends HasHeight
 */
export type HasDimensions = HasWidth & HasHeight;

/** This component supports different content colors. */
export type HasColor = {
  /** The color to render the content with. */
  color?: ExtractLiteralsForAutocomplete<
    StylePropertyValue<Property.Color>,
    ThemeColor
  >;
};

/** This component supports different backgrounds. */
export type HasBackground = {
  /** The color to render as the component's background. */
  backgroundColor?: ExtractLiteralsForAutocomplete<
    StylePropertyValue<Property.BackgroundColor>,
    ThemeColor
  >;
};

/**
 * This component supports a background image.
 * @extends HasBackground
 */
export type HasBackgroundImage = {
  /** The background image. */
  backgroundImage?: StylePropertyValue<Property.BackgroundImage>;
  /** The size of the background image. */
  backgroundSize?: StylePropertyValue<Property.BackgroundImage>;
} & HasBackground;

/** This component supports extended customisation via an options record. */
export type HasExtendedOptions = {
  /** The options to apply to the component. */
  options?: Record<string, unknown>;
};

/** This component has a disabled state. */
export type CanDisable = {
  /** Should the component render in the disabled state? */
  disabled?: boolean;
};

/** This component has a loading state. */
export type CanLoad = {
  /** Should the component render in the loading state? */
  loading?: boolean;
};

/** This component has an activated state. */
export type CanActivate = {
  /** Should the component render in the active state? */
  active?: boolean;
};

/** This component can take up the full width of it's parent container. */
export type CanBeFullWidth = {
  /** Should the component take up the full width of it's parent container? */
  fullWidth?: boolean;
};
