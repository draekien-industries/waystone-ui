import breakpoints from './breakpoints';
import colors from './colors';
import layouts from './layouts';
import styles from './styles';
import typography from './typography';
import variants from './variants';
/** The base theme for the Waystone design system. */
export const WaystoneBaseTheme = Object.assign(Object.assign(Object.assign(Object.assign({ config: {
        useLocalStorage: true,
        useCustomProperties: true,
        useRootStyles: true,
        useBorderBox: true,
    }, styles: {
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
    }, colors: colors, breakpoints: breakpoints }, typography), layouts), styles), variants);
