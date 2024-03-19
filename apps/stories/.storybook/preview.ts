import { waystoneDecorator } from './waystone.decorator';
import { create } from '@storybook/theming';
import { WaystoneBaseTheme } from '@waystone/core';
import { getThemeColors } from './preview.fx';
import { DocsContainer } from './DocsContainer';

const waystoneDarkTheme = create({
  base: 'dark',
  brandTitle: 'Waystone',
  brandImage: './assets/waystone-logo.svg',
});

const waystoneLightTheme = create({
  base: 'light',
  brandTitle: 'Waystone',
  brandImage: './assets/waystone-logo-dark.svg',
});

export const parameters = {
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    presetColors: getThemeColors().map((colorName) => ({
      color: WaystoneBaseTheme.colors[colorName],
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
  },
};

export const decorators = [waystoneDecorator];
