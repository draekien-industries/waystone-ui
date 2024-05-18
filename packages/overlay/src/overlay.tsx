import type { PropsWithChildren } from 'react';
import { Box } from 'theme-ui';
import type { ThemeColor } from '@waystone/theme';
import { absoluteCss, fullScreenCss } from './overlay.styles';
import type { OverlayProps } from './overlay.types';

export const FullScreenOverlay = ({
  children,
  ...rest
}: PropsWithChildren<OverlayProps>) => (
  <Box sx={fullScreenCss(rest)}>
    <Box sx={{ opacity: 1, position: 'relative' }}>{children}</Box>
  </Box>
);

export const AbsoluteOverlay = ({
  children,
  ...rest
}: PropsWithChildren<OverlayProps>) => (
  <Box sx={absoluteCss(rest)}>{children}</Box>
);
export const Overlay = {
  FullScreen: FullScreenOverlay,
  Absolute: AbsoluteOverlay,
} as const;
