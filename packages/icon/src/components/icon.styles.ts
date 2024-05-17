import type { ColorAttributes } from '@waystone/types';
import type { ThemeUICSSObject } from 'theme-ui';

export type IconCssOptions = {
  fontSize?: string;
} & ColorAttributes;

export const iconCss = ({
  color,
  fontSize,
}: IconCssOptions): ThemeUICSSObject => ({
  verticalAlign: 'middle',
  color,
  fontSize,
});
