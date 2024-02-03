'use client';

import { Cell, flexRender } from '@tanstack/react-table';
import { useMemo } from 'react';

export type TableCellProps<TData, TValue> = {
  children: Cell<TData, TValue>;
};

const getTableCellStyles = (size: number) => ({
  minWidth: size,
  maxWidth: size,
  paddingY: 'xs',
  paddingX: 'md',
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
