import { WaystoneDecorator } from './waystone.decorator';
import { create } from '@storybook/theming';
import { waystoneTheme } from '@waystone/theme';
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
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
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
  },
};

export const decorators = [WaystoneDecorator];
