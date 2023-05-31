import { ColumnDef, TableState } from '@tanstack/react-table';
import { Checkbox } from '../forms';
import { Button } from '../button';

export type WithSelectColumnParams<
  TData,
  TValue,
  TSingleSelect extends boolean = boolean
> = {
  columns: ColumnDef<TData, TValue>[];
  singleSelect?: TSingleSelect;
  singleSelectGroupName: TSingleSelect extends true ? string : undefined;
  expandOnSelect?: boolean;
};

export const withSelectColumn = <TData, TValue>({
  columns,
  singleSelect,
  singleSelectGroupName,
  expandOnSelect,
}: WithSelectColumnParams<TData, TValue>) => {
  const select: ColumnDef<TData, TValue> = {
    id: 'select',
    size: 42,
    header: ({ table }) =>
      !singleSelect && (
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
          }}
        />
      ),
    cell: ({ row }) =>
      singleSelect ? (
        <input
          type="radio"
          name={singleSelectGroupName}
          {...{
            sx: {
              marginLeft: `${row.depth * 2}rem`,
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
          }}
        />
      ) : (
        <Checkbox
          {...{
            sx: { marginLeft: `${row.depth * 2}rem` },
            checked: row.getIsSelected(),
            indeterminate: row.getIsSomeSelected(),
            disabled: !row.getCanSelect(),
            onChange: (e) => {
              row.getToggleSelectedHandler()(e);

              if (expandOnSelect) {
                row.getToggleExpandedHandler()();
              }
            },
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
    size: 42,
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
  TCurrent extends TableState
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
