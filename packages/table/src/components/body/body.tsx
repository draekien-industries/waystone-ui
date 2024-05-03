import type { Row } from '@tanstack/react-table';
import { alpha } from '@theme-ui/color';
import { TableRow } from '../row';

export type TableBodyProps<D> = {
  children: Row<D>[];
};

export const TableBody = <D,>({ children }: TableBodyProps<D>) => (
  <tbody
    sx={{
      'tr:nth-of-type(even)': {
        backgroundColor: alpha('b-400', 0.1),
      },
    }}
  >
    {children.map((row) => (
      <TableRow key={row.id} {...row} />
    ))}
  </tbody>
);
