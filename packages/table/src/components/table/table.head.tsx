import type { PropsWithChildren } from 'react';
import type { ThemeUICSSObject } from 'theme-ui';
import { TableHeadCell } from './table.head.cell';
import { TableHeadRow } from './table.head.row';

const style = {
  backgroundColor: 'p-400',
  position: 'sticky',
  top: 0,
  zIndex: 1,
} as const satisfies ThemeUICSSObject;

export const TableHead = ({ children }: PropsWithChildren) => (
  <thead sx={style}>{children}</thead>
);

const VirtualizedTableHead = ({ children }: PropsWithChildren) => (
  <thead
    sx={{
      backgroundColor: 'p-400',
      display: 'grid',
      position: 'sticky',
      top: 0,
      zIndex: 1,
    }}
  >
    {children}
  </thead>
);

TableHead.Virtualized = VirtualizedTableHead;

TableHead.Row = TableHeadRow;
TableHead.Cell = TableHeadCell;
