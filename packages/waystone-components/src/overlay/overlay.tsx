/** @jsxImportSource theme-ui */

import { alpha } from '@theme-ui/color';

export interface OverlayProps {
  children: React.ReactNode;
  fullScreen?: boolean;
}

export const Overlay = ({ children, fullScreen = false }: OverlayProps) => (
  <div
    sx={{
      position: fullScreen ? 'fixed' : 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 'highest',
      bg: alpha('muted', 0.9),
      backdropFilter: 'blur(10px)',
    }}
  >
    <div sx={{ opacity: 1 }}>{children}</div>
  </div>
);
