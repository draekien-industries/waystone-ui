import { alpha } from '@theme-ui/color';
import type { PropsWithChildren } from 'react';
import { TableBodyRow } from './table.body.row';
import { TableBodyCell } from './table.body.cell';

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
