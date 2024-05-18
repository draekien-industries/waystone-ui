import { flexRender, type Cell } from '@tanstack/react-table';

export const TableBodyCell = <D, V>({ id, column, getContext }: Cell<D, V>) => {
  const { columnDef, getSize } = column;

  return (
    <td
      id={id}
      sx={{
        width: getSize(),
        paddingY: 'small',
        paddingX: 'medium',
      }}
    >
      {flexRender(columnDef.cell, getContext())}
    </td>
  );
};

const VirtualizedTableBodyCell = <D, V>({
  id,
  column,
  getContext,
}: Cell<D, V>) => {
  const { columnDef, getSize } = column;

  return (
    <td
      id={id}
      sx={{
        display: 'flex',
        width: getSize(),
        paddingY: 'small',
        paddingX: 'medium',
      }}
    >
      {flexRender(columnDef.cell, getContext())}
    </td>
  );
};

TableBodyCell.Virtualized = VirtualizedTableBodyCell;
