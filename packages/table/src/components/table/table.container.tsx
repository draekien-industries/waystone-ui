import type { PropsWithChildren } from 'react';
import type { ThemeUIStyleObject } from 'theme-ui';

export const style = {
  width: '100%',
  minWidth: '400px',
  boxShadow: 'medium',
  borderCollapse: 'collapse',
} as const satisfies ThemeUIStyleObject;

export const TableContainer = ({ children }: PropsWithChildren) => (
  <table sx={style}>{children}</table>
);
