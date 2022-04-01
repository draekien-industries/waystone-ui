import type { Theme } from 'theme-ui';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { layouts } from './layouts';
import { styles } from './styles';
import { typography } from './typography';
import { variants } from './variants';

export type WaystoneTheme = Partial<Theme>;

/** The base theme for the Waystone design system. */
export const WaystoneBaseTheme: WaystoneTheme = {
  config: {
    useLocalStorage: true,
    useCustomProperties: true,
    useRootStyles: true,
    useBorderBox: true,
  },
  styles: {
    root: {
      fontFamily: 'body',
      fontWeight: 'regular',
      fontSize: '16px',
      lineHeight: 'body',
      transition: 'all 100ms ease',
      '*:focus, *:active': {
        outline: 'none',
      },
    },
  },
  colors,
  breakpoints,
  ...typography,
  ...layouts,
  ...styles,
  ...variants,
};
