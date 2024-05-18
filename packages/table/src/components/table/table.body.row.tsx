'use client';

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

export type VirtualizedTableBodyRowProps<D> = {
  start: number;
  measureElement: (node: Element | null) => void;
} & Row<D>;

const VirtualizedTableBodyRow = <D,>({
  id,
  getCanSelect,
  getVisibleCells,
  start,
  measureElement,
}: VirtualizedTableBodyRowProps<D>) => {
  const enabled = getCanSelect();
  const cells = getVisibleCells();

  return (
    <tr
      id={id}
      ref={(node) => measureElement(node)}
      sx={{
        display: 'flex',
        position: 'absolute',
        transform: `translateY(${start}px)`,
        width: '100%',
        color: enabled ? 'text' : 'muted',
        borderBottom: '1px solid',
        borderBottomColor: alpha('muted', 0.25),
      }}
    >
      {cells.map((cell) => (
        <TableBodyCell.Virtualized key={cell.id} {...cell} />
      ))}
    </tr>
  );
};

TableBodyRow.Virtualized = VirtualizedTableBodyRow;
