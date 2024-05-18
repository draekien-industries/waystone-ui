import type { ColumnDef } from '@tanstack/react-table';
import { InteractiveColumnCell } from './interactiveColumnCell';
import { InteractiveColumnHeader } from './interactiveColumnHeader';

export const createInteractiveColumn = <D = unknown, V = unknown>(
  column?: Omit<ColumnDef<D, V>, 'header' | 'cell'>
): ColumnDef<D, V> => {
  const base = {
    id: 'table-interactions',
    header: InteractiveColumnHeader,
    cell: InteractiveColumnCell,
  };

  return column
    ? {
        ...base,
        ...column,
      }
    : base;
};
