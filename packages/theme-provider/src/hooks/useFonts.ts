import { useEffect } from 'react';

export type UseFontOptions = {
  /** The url to the text fonts you want to use. */
  textFontUri?: string;
  /** The url to the icon font you want to use. */
  iconFontUri?: string;
};

const baseTextFont =
  'https://fonts.googleapis.com/css2?family=Barlow:wght@200;300;400;500;600;700&family=Fira+Code&display=swap';
const baseIconFont =
  'https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp';

const addFonts = (options?: UseFontOptions) => {
  const fonts: { [key: string]: string } = {
    text: options?.textFontUri || baseTextFont,
    icons: options?.iconFontUri || baseIconFont,
  };

  if (!document.getElementById('fontsPreconnect')) {
    const preconnectLink = document.createElement('link');
    preconnectLink.id = 'fontsPreconnect';
    preconnectLink.rel = 'preconnect';
    preconnectLink.href = 'https://fonts.gstatic.com';
    document.head.appendChild(preconnectLink);
  }

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

  const removeFonts = () => {
    Object.keys(fonts).forEach((key) => {
      const link = document.getElementById(key);

      if (link) {
        link.remove();
      }
    });
  };

  return removeFonts;
};

export const useFonts = (options?: UseFontOptions) => {
  useEffect(() => {
    const removeFonts = addFonts(options);

    return () => removeFonts();
  }, [options]);
};
