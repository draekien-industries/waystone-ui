import { Cell, flexRender } from '@tanstack/react-table';
import { useMemo } from 'react';

export type TableCellProps<TData, TValue> = {
  cell: Cell<TData, TValue>;
};

export const TableCell = <TData, TValue>({
  cell,
}: TableCellProps<TData, TValue>) => {
  const size = useMemo(() => cell.column.getSize(), [cell.column]);

  return (
    <td
      sx={{
        minWidth: size,
        maxWidth: size,
        paddingY: 'xs',
        paddingX: 'md',
      }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </td>
  );
};
