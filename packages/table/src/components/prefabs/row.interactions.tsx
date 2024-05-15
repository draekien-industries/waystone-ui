'use client';

import { Checkbox } from '@waystone/form-fields';
import { Button } from '@waystone/button';
import { Flex } from 'theme-ui';
import type {
  CellContext,
  HeaderContext,
  ColumnDef,
} from '@tanstack/react-table';

const TableBodyRowInteractions = <D, V>({ row }: CellContext<D, V>) => (
  <Flex sx={{ gap: 'small', paddingLeft: `${row.depth * 1.5}rem` }}>
    {(row.getCanSelect() || row.getCanSelectSubRows()) && (
      <Checkbox
        id={`checkbox_${row.id}`}
        checked={row.getIsSelected()}
        indeterminate={row.getIsSomeSelected()}
        onChange={row.getToggleSelectedHandler()}
      />
    )}
    {row.getCanExpand() && (
      <Button
        icon={{ name: row.getIsExpanded() ? 'expand_less' : 'expand_more' }}
        variant="ghost"
        onClick={row.getToggleExpandedHandler()}
      />
    )}
  </Flex>
);

const TableHeadRowInteractions = <D, V>({ table }: HeaderContext<D, V>) => (
  <Flex sx={{ gap: 'small' }}>
    <Checkbox
      id="select-all-checkbox"
      checked={table.getIsAllRowsSelected()}
      indeterminate={table.getIsSomeRowsSelected()}
      onChange={table.getToggleAllRowsSelectedHandler()}
    />
    {table.getCanSomeRowsExpand() && (
      <Button
        icon={{
          name: table.getIsAllRowsExpanded() ? 'expand_less' : 'expand_more',
        }}
        variant="ghost"
        onClick={table.getToggleAllRowsExpandedHandler()}
      />
    )}
  </Flex>
);

export const createInteractiveColumn = <D = unknown, V = unknown>(
  options?: ColumnDef<D, V>
): ColumnDef<D, V> => {
  if (options) {
    const { id, header, cell, ...rest } = options;

    return {
      id: id ?? 'selector',
      header: header ?? TableHeadRowInteractions,
      cell: cell ?? TableBodyRowInteractions,
      ...rest,
    };
  }

  return {
    id: 'selector',
    header: TableHeadRowInteractions,
    cell: TableBodyRowInteractions,
  };
};
