import type { Preview } from '@storybook/react';
import { create } from '@storybook/theming';
import { waystoneTheme } from '@waystone/theme';
import { DocsContainer } from './DocsContainer';
import { getThemeColors } from './preview.fx';
import {
  FontLoader,
  ThemeChanger,
  WaystoneDecorator,
} from './waystone.decorator';

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
    current: 'light',
    dark: waystoneDarkTheme,
    light: waystoneLightTheme,
  },
  docs: {
    container: DocsContainer,
    forceExtractedArgTypes: true,
  },
};

export const decorators: Preview['decorators'] = [
  (Story) => (
    <WaystoneDecorator>
      <ThemeChanger>
        <FontLoader>
          <Story />
        </FontLoader>
      </ThemeChanger>
    </WaystoneDecorator>
  ),
];
export const tags = ['autodocs'];
