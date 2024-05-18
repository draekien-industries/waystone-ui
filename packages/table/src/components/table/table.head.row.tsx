import type { HeaderGroup as TableHeadRowProps } from '@tanstack/react-table';
import { TableHeadCell } from './table.head.cell';

export const TableHeadRow = <D,>({ id, headers }: TableHeadRowProps<D>) => (
  <tr id={id}>
    {headers.map((header) => (
      <TableHeadCell key={header.id} {...header} />
    ))}
  </tr>
);

const VirtualizedTableHeadRow = <D,>({ id, headers }: TableHeadRowProps<D>) => (
  <tr id={id} sx={{ display: 'flex', width: '100%' }}>
    {headers.map((header) => (
      <TableHeadCell.Virtualized key={header.id} {...header} />
    ))}
  </tr>
);

TableHeadRow.Virtualized = VirtualizedTableHeadRow;
