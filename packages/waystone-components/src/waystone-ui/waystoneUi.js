import { jsx as _jsx } from "theme-ui/jsx-runtime";
/** @jsxImportSource theme-ui */
import { useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { WaystoneBaseTheme, mergeObjects } from '@waystone/core';
const baseTextFont = 'https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400;500;600;700&family=Fira+Code&display=swap';
const baseIconFont = 'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp';
const addFonts = (options) => {
    const fonts = {
        text: (options === null || options === void 0 ? void 0 : options.textFont) || baseTextFont,
        icons: (options === null || options === void 0 ? void 0 : options.iconFont) || baseIconFont,
    };
    const preconnectLink = document.createElement('link');
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://fonts.gstatic.com';
    document.head.appendChild(preconnectLink);
    Object.keys(fonts).forEach((key) => {
        const linkExists = document.getElementById(key);
        if (!linkExists) {
            const link = document.createElement('link');
            link.id = key;
            link.rel = 'stylesheet';
            link.href = fonts[key];
            link.crossOrigin = 'anonymous';
            document.head.appendChild(link);
        }
    });
};
/**
 * Creates the theme provider for Waystone.
 * @param props - the props for configuring the theme provider.
 * @returns the Waystone theme provider
 */
export const Waystone = ({ theme, fontOptions, children, }) => {
    const parsedTheme = JSON.parse(JSON.stringify(WaystoneBaseTheme));
    useEffect(() => {
        addFonts(fontOptions);
    }, [fontOptions]);
    if (theme) {
        mergeObjects(parsedTheme, theme);
    }
    return _jsx(ThemeProvider, Object.assign({ theme: parsedTheme }, { children: children }));
};
