'use client';

import { VirtualItem } from '@tanstack/react-virtual';
import { alpha } from '@theme-ui/color';
import { ReactElement, memo } from 'react';
import { ThemeUIStyleObject } from 'theme-ui';
import { TableCellProps } from './table.cell';

export type TableRowProps<TData, TValue> = {
  disabled?: boolean;
  children:
    | ReactElement<TableCellProps<TData, TValue>>
    | ReactElement<TableCellProps<TData, TValue>>[];
};

export type VirtualTableRowProps<TData, TValue> = TableRowProps<
  TData,
  TValue
> & {
  virtualRow: VirtualItem;
  index: number;
};

const getTableRowCss = (
  disabled: boolean,
  virtualRow?: VirtualItem,
  index?: number
): ThemeUIStyleObject => {
  const base = {
    color: disabled ? 'muted' : 'text',
    borderBottom: '1px solid',
    borderBottomColor: alpha('muted', 0.25),
  };

  if (virtualRow && index) {
    return {
      ...base,
      height: `${virtualRow.size}px`,
      transform: `translateY(${virtualRow.start - index * virtualRow.size}px)`,
    };
  }

  return base;
};

const TableRowContent = <TData, TValue>({
  disabled = false,
  children,
}: TableRowProps<TData, TValue>) => (
  <tr sx={getTableRowCss(disabled)}>{children}</tr>
);

const VirtualTableRowContent = <TData, TValue>({
  disabled = false,
  virtualRow,
  index,
  children,
}: VirtualTableRowProps<TData, TValue>) => (
  <tr
    sx={getTableRowCss(disabled, virtualRow, index)}
    data-index={virtualRow.index}>
    {children}
  </tr>
);

export const TableRow = memo(TableRowContent);

export const VirtualTableRow = memo(VirtualTableRowContent);







