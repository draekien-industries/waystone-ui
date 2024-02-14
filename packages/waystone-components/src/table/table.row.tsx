'use client';

import { memo, ReactElement } from 'react';
import { ThemeUIStyleObject } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import { TableCellProps } from './table.cell';

export type TableRowProps<TData, TValue> = {
  disabled?: boolean;
  children:
    | ReactElement<TableCellProps<TData, TValue>>
    | ReactElement<TableCellProps<TData, TValue>>[];
};

const getTableRowCss = (disabled: boolean): ThemeUIStyleObject => ({
  color: disabled ? 'muted' : 'text',
  borderBottom: '1px solid',
  borderBottomColor: alpha('muted', 0.25),
});

const TableRowContent = <TData, TValue>({
  disabled = false,
  children,
}: TableRowProps<TData, TValue>) => <tr sx={getTableRowCss(disabled)}>{children}</tr>;

export const TableRow = memo(TableRowContent);
