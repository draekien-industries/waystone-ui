import { WaystoneDecorator } from './waystone.decorator';
import { create } from '@storybook/theming';
import type { Preview } from '@storybook/react';
import { waystoneTheme } from '@waystone/theme';
import { getThemeColors } from './preview.fx';
import { DocsContainer } from './DocsContainer';

const waystoneDarkTheme = create({
  base: 'dark',
  brandTitle: 'Waystone',
  brandImage: '/waystone-logo.svg',
});

const waystoneLightTheme = create({
  base: 'light',
  brandTitle: 'Waystone',
  brandImage: '/waystone-logo-dark.svg',
});

export const parameters: Preview['parameters'] = {
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color|backgroundColor)$/i,
      date: /Date$/,
    },
    presetColors: getThemeColors().map((colorName) => ({
      color: waystoneTheme.colors[colorName],
      title: colorName,
    })),
  },
  darkMode: {
    current: 'dark',
    dark: waystoneDarkTheme,
    light: waystoneLightTheme,
  },
  docs: {
    container: DocsContainer,
    forceExtractedArgTypes: true,
  },
};

export const decorators: Preview['decorators'] = [WaystoneDecorator];
