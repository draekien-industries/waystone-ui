import { type Cell, flexRender } from '@tanstack/react-table';

export const TableCell = <D, V>({ id, column, getContext }: Cell<D, V>) => {
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
