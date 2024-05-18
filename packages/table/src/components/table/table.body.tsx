import { alpha } from '@theme-ui/color';
import type { PropsWithChildren, ReactNode } from 'react';
import { TableBodyCell } from './table.body.cell';
import { TableBodyRow } from './table.body.row';

export const TableBody = ({ children }: PropsWithChildren) => (
  <tbody
    sx={{
      'tr:nth-of-type(even)': {
        backgroundColor: alpha('b-400', 0.1),
      },
    }}
  >
    {children}
  </tbody>
);

TableBody.Row = TableBodyRow;
TableBody.Cell = TableBodyCell;

export type VirtualizedTableBodyProps = {
  children: ReactNode;
  getTotalSize: () => number;
};

const VirtualizedTableBody = ({
  children,
  getTotalSize,
}: VirtualizedTableBodyProps) => (
  <tbody
    sx={{
      display: 'grid',
      position: 'relative',
      height: getTotalSize(),
    }}
  >
    {children}
  </tbody>
);

TableBody.Virtualized = VirtualizedTableBody;
