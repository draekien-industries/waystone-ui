/** @jsxImportSource theme-ui */
import React from 'react';
import { WaystoneTheme } from '@waystone/core';
/** The options for configuring your own font. */
interface FontOptions {
    /** The url to the text fonts you want to use. */
    textFont?: string;
    /** The url to the icon font you want to use. */
    iconFont?: string;
}
/**
 * The props required to configure the theme provider.
 */
export interface WaystoneProps {
    /** The theme to merge with the base theme. */
    theme?: WaystoneTheme;
    /** The custom fonts to use instead of the included fonts. */
    fontOptions?: FontOptions;
}
/**
 * Creates the theme provider for Waystone.
 * @param props - the props for configuring the theme provider.
 * @returns the Waystone theme provider
 */
export declare const Waystone: React.FC<WaystoneProps>;
export {};
//# sourceMappingURL=waystoneUi.d.ts.map