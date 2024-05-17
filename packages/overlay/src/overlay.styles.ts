import { alpha } from '@theme-ui/color';
import type { ThemeUICSSObject } from 'theme-ui';
import type { OverlayProps } from './overlay.types';

export const fullScreenCss = ({
  blur = 10,
  backgroundOpacity = 0.9,
  backgroundColor = 'ghost',
}: OverlayProps): ThemeUICSSObject => ({
  position: 'fixed',
  inset: 0,
  zIndex: 'highest',
  backgroundColor: alpha(backgroundColor, backgroundOpacity),
  backdropFilter: `blur(${blur}px)`,
});

export const absoluteCss = ({
  blur = 10,
  backgroundOpacity = 0.9,
  backgroundColor = 'ghost',
}: OverlayProps): ThemeUICSSObject => ({
  position: 'absolute',
  inset: 0,
  zIndex: 'highest',
  backgroundColor: alpha(backgroundColor, backgroundOpacity),
  backdropFilter: `blur(${blur}px)`,
  borderRadius: 'inherit',
});
