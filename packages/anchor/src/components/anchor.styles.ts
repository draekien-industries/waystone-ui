import { outlineCss, cssSelectors } from '@waystone/css-presets';
import type { ThemeUICSSObject } from 'theme-ui';

export const anchorCss: ThemeUICSSObject = {
  paddingX: 'extra-small',
  textDecoration: 'none',
  borderBottom: '1px solid',
  borderBottomColor: 'highlight',
  color: 'inherit',
  transition: 'all 100ms',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  fontSize: 'inherit',
  cursor: 'pointer',
  ...outlineCss.base,
  [cssSelectors.hover]: {
    backgroundColor: 'ghost',
    borderTopLeftRadius: 'small',
    borderTopRightRadius: 'small',
  },
  [cssSelectors.focusVisible]: {
    backgroundColor: 'ghost',
    borderTopLeftRadius: 'small',
    borderTopRightRadius: 'small',
    ...outlineCss.focused,
  },
} as const;

export const undecoratedAnchorCss: ThemeUICSSObject = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
} as const;
