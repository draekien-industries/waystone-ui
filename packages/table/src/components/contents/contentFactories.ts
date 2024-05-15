import type { ColumnDef } from '@tanstack/react-table';
import { CheckboxCell, CheckboxHeader } from './checkbox.content';

export const createSelectableColumn = <D = unknown, V = unknown>(
  options?: ColumnDef<D, V>
): ColumnDef<D, V> => {
  if (options) {
    const { id, header, cell, ...rest } = options;

    return {
      id: id ?? 'selector',
      header: header ?? CheckboxHeader,
      cell: cell ?? CheckboxCell,
      ...rest,
    };
  }

  return {
    id: 'selector',
    header: CheckboxHeader,
    cell: CheckboxCell,
  };
};
