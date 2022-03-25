import { waystoneDecorator } from './waystone.decorator';
import { create } from '@storybook/theming';
import logo from '../stories/assets/waystone-logo.svg';
import logoDark from '../stories/assets/waystone-logo-dark.svg';
import { WaystoneBaseTheme } from '@waystone/core';
import { getThemeColors } from '../utils';
import { DocsContainer } from './docs.container';

const waystoneDarkTheme = create({
  base: 'dark',
  brandTitle: 'Waystone',
  brandImage: logo,
});

const waystoneLightTheme = create({
  base: 'light',
  brandTitle: 'Waystone',
  brandImage: logoDark,
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
      color: WaystoneBaseTheme.colors[colorName],
      title: colorName,
    })),
  },
  darkMode: {
    dark: waystoneDarkTheme,
    light: waystoneLightTheme,
  },
  docs: {
    container: DocsContainer,
  },
};

export const decorators = [waystoneDecorator];
