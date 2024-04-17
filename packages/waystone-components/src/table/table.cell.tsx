'use client';

import type { Cell } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { useMemo } from 'react';

export type TableCellProps<TData, TValue> = {
  children: Cell<TData, TValue>;
};

const getTableCellStyles = (size: number) => ({
  width: size,
  paddingY: 'small',
  paddingX: 'medium',
});

export const TableCell = <TData, TValue>({
  children,
}: TableCellProps<TData, TValue>) => {
  const styles = useMemo(
    () => getTableCellStyles(children.column.getSize()),
    [children.column]
  );

  return (
    <td sx={styles}>
      {flexRender(children.column.columnDef.cell, children.getContext())}
    </td>
  );
};
