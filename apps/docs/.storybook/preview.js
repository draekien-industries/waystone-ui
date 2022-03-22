import { waystoneDecorator } from './waystone.decorator';
import { create } from '@storybook/theming';

const waystoneDarkTheme = create({
  base: 'dark',
  brandTitle: 'Waystone',
});

const waystoneLightTheme = create({
  base: 'light',
  brandTitle: 'Waystone',
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  darkMode: {
    dark: waystoneDarkTheme,
    light: waystoneLightTheme,
  },
  docs: {
    theme: waystoneLightTheme,
  },
};

export const decorators = [waystoneDecorator];
