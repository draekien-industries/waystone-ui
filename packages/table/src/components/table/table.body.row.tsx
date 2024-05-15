import type { Row } from '@tanstack/react-table';
import { alpha } from '@theme-ui/color';
import { TableBodyCell } from './table.body.cell';

export const TableBodyRow = <D,>({
  id,
  getCanSelect,
  getVisibleCells,
}: Row<D>) => {
  const enabled = getCanSelect();
  const cells = getVisibleCells();

  return (
    <tr
      id={id}
      sx={{
        color: enabled ? 'text' : 'muted',
        borderBottom: '1px solid',
        borderBottomColor: alpha('muted', 0.25),
      }}
    >
      {cells.map((cell) => (
        <TableBodyCell key={cell.id} {...cell} />
      ))}
    </tr>
  );
};
