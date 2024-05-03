import type { Cell, Row } from '@tanstack/react-table';
import type { ReactElement } from 'react';
import type { DisabledAttributes } from '@waystone/types';
import { alpha } from '@theme-ui/color';
import { TableCell } from '../cell';

export type TableRowProps<D, V> = {
  children: ReactElement<Cell<D, V>> | Array<ReactElement<Cell<D, V>>>;
} & DisabledAttributes;

export const TableRow = <D,>({ id, getCanSelect, getVisibleCells }: Row<D>) => {
  const enabled = getCanSelect();

  return (
    <tr
      id={id}
      sx={{
        color: enabled ? 'text' : 'muted',
        borderBottom: '1px solid',
        borderBottomColor: alpha('muted', 0.25),
      }}
    >
      {getVisibleCells().map((cell) => (
        <TableCell key={cell.id} {...cell} />
      ))}
    </tr>
  );
};
