import type { PropsWithChildren } from 'react';
import type { HeaderGroup as TableHeadRowProps } from '@tanstack/react-table';
import { TableHeadCell } from './table.head.cell';

export const TableHeadRow = <D,>({ id, headers }: TableHeadRowProps<D>) => (
  <tr id={id}>
    {headers.map((header) => (
      <TableHeadCell key={header.id} {...header} />
    ))}
  </tr>
);
