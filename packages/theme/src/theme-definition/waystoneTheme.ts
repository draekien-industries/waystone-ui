import type { Theme } from 'theme-ui';
import { colors } from './colors';
import { breakpoints } from './breakpoints';
import { typography } from './typography';
import { layouts } from './layouts';
import { variants } from './variants';
import { styles } from './styles';

export const waystoneTheme = {
  config: {
    useLocalStorage: true,
    useCustomProperties: true,
    useRootStyles: true,
    useBorderBox: true,
    useColorSchemeMediaQuery: true,
  },
  colors,
  breakpoints: [...breakpoints],
  ...typography,
  ...layouts,
  ...styles,
  ...variants,
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'regular',
      fontSize: '16px',
      lineHeight: 'body',
      transition: 'all 200ms ease',
    },
  },
} as const satisfies Theme;

export type WaystoneTheme = typeof waystoneTheme;
