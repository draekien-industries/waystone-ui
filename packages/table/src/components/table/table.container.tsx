import { type PropsWithChildren } from 'react';
import type { ThemeUICSSObject } from 'theme-ui';

export const style = {
  width: '100%',
  minWidth: '400px',
  boxShadow: 'medium',
  borderCollapse: 'collapse',
} as const satisfies ThemeUICSSObject;

export const TableContainer = ({ children }: PropsWithChildren) => (
  <table sx={style}>{children}</table>
);

const VirtualizedTableContainer = ({ children }: PropsWithChildren) => (
  <table
    sx={{ display: 'grid', boxShadow: 'medium', borderCollapse: 'collapse' }}
  >
    {children}
  </table>
);

TableContainer.Virtualized = VirtualizedTableContainer;
