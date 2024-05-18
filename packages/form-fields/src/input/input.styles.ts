import { alpha } from '@theme-ui/color';
import { outlineCss, cssSelectors } from '@waystone/css-presets';
import type { FullWidthAttributes, WidthAttributes } from '@waystone/types';
import type { ThemeUICSSObject } from 'theme-ui';

export type InputCssOptions = WidthAttributes & FullWidthAttributes;

export const inputCss = ({
  width,
  minWidth,
  maxWidth,
  fullWidth,
}: InputCssOptions): ThemeUICSSObject => ({
  borderRadius: 'small',
  border: '1px solid',
  borderColor: 'b-400',
  padding: 'extra-small',
  variant: 'text.body',
  color: 'text',
  width: fullWidth ? '100%' : width,
  minWidth,
  maxWidth,
  backgroundColor: alpha('ghost', 0.5),
  ...outlineCss.base,
  [cssSelectors.focusVisible]: {
    ...outlineCss.focused,
  },
  [cssSelectors.active]: {
    ...outlineCss.active,
  },
});
