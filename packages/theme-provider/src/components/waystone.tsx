import type { PropsWithChildren } from 'react';
import { type Theme, ThemeUIProvider } from 'theme-ui';
import { waystoneTheme } from '@waystone/theme';
import { mergeObjects } from './waystone.utils';

export type WaystoneProps = {
  theme?: Partial<Theme>;
};

export const Waystone = ({
  children,
  theme,
}: PropsWithChildren<WaystoneProps>) => (
  <ThemeUIProvider theme={mergeObjects(waystoneTheme, theme)}>
    {children}
  </ThemeUIProvider>
);
