import { StylePropertyValue } from '@theme-ui/css';
import { Size, SizeExtended, ThemeColor, ThemeSize } from '@waystone/core';
import { Property } from 'csstype';
/** This component supports different variants. */
export interface HasVariant {
    /** The variant to render. */
    variant?: string;
}
/** This component supports different sizes. */
export interface HasSize {
    /** The size to render. */
    size?: Size;
}
/** This components supports an extended list of sizes. */
export interface HasExtendedSize {
    /** The size to render. */
    size?: SizeExtended;
}
/** This component supports a specific width. */
export interface HasWidth {
    /**
     * The width of the component.
     * Use an array to take advantage of ThemeUI breakpoints.
     */
    width?: ThemeSize | ThemeSize[] | StylePropertyValue<Property.Width<string | number>>;
}
/** This component supports a specific height. */
export interface HasHeight {
    /**
     * The height of the component.
     * Use an array to take advantage of ThemeUI breakpoints.
     */
    height?: ThemeSize | ThemeSize[] | StylePropertyValue<Property.Height<string | number>>;
}
/**
 * This component supports both a specific height and width.
 * @extends HasWidth
 * @extends HasHeight
 */
export interface HasDimensions extends HasWidth, HasHeight {
}
/** This component supports different content colors. */
export interface HasColor {
    /** The color to render the content with. */
    color?: ThemeColor | StylePropertyValue<Property.Color>;
}
/** This component supports different backgrounds. */
export interface HasBackground {
    /** The color to render as the component's background. */
    backgroundColor?: ThemeColor | StylePropertyValue<Property.BackgroundColor>;
}
/**
 * This component supports a background image.
 * @extends HasBackground
 */
export interface HasBackgroundImage extends HasBackground {
    /** The background image. */
    backgroundImage?: StylePropertyValue<Property.BackgroundImage>;
    /** The size of the background image. */
    backgroundSize?: StylePropertyValue<Property.BackgroundImage>;
}
/** This component supports extended customisation via an options record. */
export interface HasExtendedOptions {
    /** The options to apply to the component. */
    options?: Record<string, any>;
}
/** This component has a disabled state. */
export interface CanDisable {
    /** Should the component render in the disabled state? */
    disabled?: boolean;
}
/** This component has a loading state. */
export interface CanLoad {
    /** Should the component render in the loading state? */
    loading?: boolean;
}
/** This component has an activated state. */
export interface CanActivate {
    /** Should the component render in the active state? */
    active?: boolean;
}
/** This component can take up the full width of it's parent container. */
export interface CanBeFullWidth {
    /** Should the component take up the full width of it's parent container? */
    fullWidth?: boolean;
}
//# sourceMappingURL=interfaces.d.ts.map