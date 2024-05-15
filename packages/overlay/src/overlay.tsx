import type { PropsWithChildren } from 'react';
import { Box } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import type { ThemeColor } from '@waystone/theme';

export type OverlayProps = {
  /**
   * Set the blurriness factor of the backdrop filter by providing a px value
   * @default 10
   */
  blur?: number;
  /**
   * Set the transparency of the overlay by providing a value from 0 -> 1
   * @default 0.9
   */
  backgroundOpacity?: number;
  /**
   * Set the background color of the overlay to a color defined in the theme
   * @default 'ghost'
   */
  backgroundColor?: ThemeColor;
};

export const FullScreenOverlay = ({
  children,
  blur = 10,
  backgroundOpacity = 0.9,
  backgroundColor = 'ghost',
}: PropsWithChildren<OverlayProps>) => (
  <Box
    sx={{
      position: 'fixed',
      inset: 0,
      zIndex: 'highest',
      backgroundColor: alpha(backgroundColor, backgroundOpacity),
      backdropFilter: `blur(${blur}px)`,
    }}
  >
    <Box sx={{ opacity: 1, position: 'relative' }}>{children}</Box>
  </Box>
);

export const AbsoluteOverlay = ({
  children,
  blur = 10,
  backgroundOpacity = 0.9,
  backgroundColor = 'ghost',
}: PropsWithChildren<OverlayProps>) => (
  <Box
    key={backgroundColor}
    sx={{
      position: 'absolute',
      inset: 0,
      zIndex: 'highest',
      backgroundColor: alpha(backgroundColor, backgroundOpacity),
      backdropFilter: `blur(${blur}px)`,
      borderRadius: 'inherit',
    }}
  >
    {children}
  </Box>
);
export const Overlay = {
  FullScreen: FullScreenOverlay,
  Absolute: AbsoluteOverlay,
};
