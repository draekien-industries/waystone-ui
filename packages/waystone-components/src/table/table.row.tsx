'use client';

import { memo, ReactElement, useMemo } from 'react';
import { useIsDarkMode } from '../hooks';
import { TableCellProps } from './table.cell';

export type TableRowProps<TData, TValue> = {
  disabled?: boolean;
  children:
    | ReactElement<TableCellProps<TData, TValue>>
    | ReactElement<TableCellProps<TData, TValue>>[];
};

const getBackgroundColor = (darkMode: boolean, disabled: boolean) => {
  if (darkMode) {
    return disabled ? 'b-600' : 'b-700';
  }

  return disabled ? 'b-200' : 'b-100';
};

const TableRowContent = <TData, TValue>({
  disabled = false,
  children,
}: TableRowProps<TData, TValue>) => {
  const darkMode = useIsDarkMode();

  const backgroundColor = useMemo(
    () => getBackgroundColor(darkMode, disabled),
    [darkMode, disabled]
  );

  return (
    <tr
      sx={{
        backgroundColor,
        color: disabled ? 'b-400' : 'text',
      }}
    >
      {children}
    </tr>
  );
};

export const TableRow = memo(TableRowContent);
