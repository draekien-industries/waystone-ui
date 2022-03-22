/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react';
import { ThemeProvider } from 'theme-ui';
import { WaystoneBaseTheme, WaystoneTheme, mergeObjects } from '@waystone/core';

/** The options for configuring your own font. */
interface FontOptions {
  /** The url to the text fonts you want to use. */
  textFont?: string;
  /** The url to the icon font you want to use. */
  iconFont?: string;
}

const baseTextFont =
  'https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400;500;600;700&family=Fira+Code&display=swap';
const baseIconFont =
  'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp';

const addFonts = (options?: FontOptions) => {
  const fonts: { [key: string]: string } = {
    text: options?.textFont || baseTextFont,
    icons: options?.iconFont || baseIconFont,
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
export const Waystone: React.FC<WaystoneProps> = ({
  theme,
  fontOptions,
  children,
}) => {
  const parsedTheme = JSON.parse(JSON.stringify(WaystoneBaseTheme));

  useEffect(() => {
    addFonts(fontOptions);
  }, [fontOptions]);

  if (theme) {
    mergeObjects(parsedTheme, theme);
  }

  return <ThemeProvider theme={parsedTheme}>{children}</ThemeProvider>;
};
