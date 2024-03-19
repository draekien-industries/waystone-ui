import type { ColumnDef, TableState } from '@tanstack/react-table';
import { Button } from '../button';
import { Checkbox, Radio } from '../forms';
import type { WithSelectColumnParams } from './table.types';

export const withSelectColumn = <TData, TValue>({
  columns,
  expandOnSelect,
  ...rest
}: WithSelectColumnParams<TData, TValue>) => {
  const select: ColumnDef<TData, TValue> = {
    id: 'select',
    size: 12,
    header: ({ table }) =>
      !rest.singleSelect && (
        <Checkbox
          {...{
            checked: table.getIsAllRowsSelected(),
            indeterminate: table.getIsSomeRowsSelected(),
            onChange: (e) => {
              table.getToggleAllRowsSelectedHandler()(e);

              if (expandOnSelect) {
                table.getToggleAllRowsExpandedHandler()(e);
              }
            },
            'aria-label': 'select all',
          }}
        />
      ),
    cell: ({ row }) =>
      rest.singleSelect ? (
        <Radio
          name={rest.singleSelectGroupName}
          {...{
            sx: {
              marginLeft: `${row.depth}rem`,
              cursor: row.getCanSelect() ? 'pointer' : 'not-allowed',
            },
            checked: row.getIsSelected(),
            disabled: !row.getCanSelect(),
            onChange: (e) => {
              row.getToggleSelectedHandler()(e);

              if (expandOnSelect) {
                row.getToggleExpandedHandler()();
              }
            },
            'aria-label': 'select row',
          }}
        />
      ) : (
        <Checkbox
          {...{
            sx: { marginLeft: `${row.depth + 0.25}rem` },
            checked: row.getIsSelected(),
            indeterminate: row.getIsSomeSelected(),
            disabled: !row.getCanSelect(),
            onChange: (e) => {
              row.getToggleSelectedHandler()(e);

              if (expandOnSelect) {
                row.getToggleExpandedHandler()();
              }
            },
            'aria-label': 'select row',
          }}
        />
      ),
  };

  return [select, ...columns];
};

export type WithExpandColumnParams<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  expandOnSelect?: boolean;
};

export const withExpandColumn = <TData, TValue>({
  columns,
  expandOnSelect,
}: WithExpandColumnParams<TData, TValue>) => {
  if (expandOnSelect) {
    return [...columns];
  }

  const expand: ColumnDef<TData, TValue> = {
    id: 'expand',
    size: 12,
    maxSize: 42,
    header: ({ table }) => (
      <Button
        {...{
          onClick: table.getToggleAllRowsExpandedHandler(),
          icon: {
            name: table.getIsAllRowsExpanded() ? 'expand_less' : 'expand_more',
          },
          variant: 'ghost',
        }}
      />
    ),
    cell: ({ row }) =>
      row.getCanExpand() && (
        <Button
          {...{
            sx: { marginLeft: `${row.depth * 2}rem` },
            onClick: row.getToggleExpandedHandler(),
            icon: { name: row.getIsExpanded() ? 'expand_less' : 'expand_more' },
            variant: 'ghost',
          }}
        />
      ),
  };

  return [expand, ...columns];
};

export const getDifference = <
  TPrevious extends TableState,
  TCurrent extends TableState,
>(
  previous: TPrevious,
  current: TCurrent
): Partial<TableState> =>
  Object.keys(current).reduce((diff, key) => {
    if (previous[key as keyof TableState] === current[key as keyof TableState])
      return diff;

    return {
      ...diff,
      [key]: current[key as keyof TableState],
    };
  }, {});
