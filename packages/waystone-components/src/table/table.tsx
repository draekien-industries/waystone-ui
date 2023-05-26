/** @jsxImportSource theme-ui */
import { ReactElement, useEffect, useMemo, useRef } from 'react';
import {
  ColumnDef,
  TableOptions,
  useReactTable,
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
} from '@tanstack/react-table';
import { useVirtual } from 'react-virtual';
import { withExpandColumn, withSelectColumn } from './table.fx';
import { TableHeader } from './table.header';
import { TableRow, RenderSubComponentProps } from './table.types';
import { TableBody } from './table.body';
import { TablePagination } from './table.pagination';
import { HasHeight } from '../common';

export type TableProps<
  TData extends TableRow<TData>,
  TValue,
  TColumns extends ColumnDef<TData, TValue>[],
  TSingleSelect extends boolean = boolean
> = {
  data: TData[];
  columns: TColumns;
  pageSize?: number;
  singleSelect?: TSingleSelect;
  singleSelectGroupName: TSingleSelect extends true ? string : undefined;
  expandOnSelect?: boolean;
  renderSubComponent?: (props: RenderSubComponentProps<TData>) => ReactElement;
} & Pick<
  TableOptions<TData>,
  'enableExpanding' | 'enableSorting' | 'enableFilters' | 'enableRowSelection'
>;

export const Table = <
  TData extends TableRow<TData>,
  TValue,
  TColumns extends ColumnDef<TData, TValue>[]
>({
  data,
  columns,
  pageSize,
  singleSelect,
  singleSelectGroupName,
  enableExpanding,
  enableSorting,
  enableFilters,
  enableRowSelection,
  expandOnSelect,
  renderSubComponent,
}: TableProps<TData, TValue, TColumns>) => {
  if (pageSize && pageSize < 1) {
    throw new Error('Page size must be greater than or equal to 1');
  }

  const memoizedData = useMemo(() => [...data], [data]);

  const memoizedColumns = useMemo(() => {
    let modifiedColumns: ColumnDef<TData, TValue>[] = columns;

    if (enableRowSelection) {
      modifiedColumns = withSelectColumn({
        columns: modifiedColumns,
        singleSelect,
        singleSelectGroupName,
        expandOnSelect,
      });
    }

    if (enableExpanding) {
      modifiedColumns = withExpandColumn({
        columns: modifiedColumns,
        expandOnSelect,
      });
    }

    return modifiedColumns;
  }, [
    columns,
    expandOnSelect,
    enableExpanding,
    enableRowSelection,
    singleSelect,
    singleSelectGroupName,
  ]);

  const table = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    enableRowSelection,
    enableMultiRowSelection: !singleSelect,
    enableSorting,
    enableFilters,
    enableExpanding,
    getRowCanExpand: (row) =>
      renderSubComponent ? !!renderSubComponent({ row }) : !!row.subRows.length,
    getIsRowExpanded:
      enableExpanding && expandOnSelect && enableRowSelection
        ? (row) => row.getIsSelected()
        : undefined,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: pageSize ? getPaginationRowModel() : undefined,
    getFilteredRowModel: enableFilters ? getFilteredRowModel() : undefined,
    getExpandedRowModel: enableExpanding ? getExpandedRowModel() : undefined,
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
  });

  const { setPageSize } = table;
  const { rows } = table.getRowModel();

  useEffect(() => {
    if (pageSize) {
      setPageSize(pageSize);
    }
  }, [setPageSize, pageSize]);

  return (
    <>
      <table sx={{ width: '100%', borderRadius: 'xl', overflow: 'clip' }}>
        <TableHeader {...table} />
        <TableBody rows={rows} renderSubComponent={renderSubComponent} />
      </table>
      {pageSize && <TablePagination {...table} />}
    </>
  );
};

export type VirtualizedTableProps<
  TData extends TableRow<TData>,
  TValue,
  TColumns extends ColumnDef<TData, TValue>[]
> = HasHeight & TableProps<TData, TValue, TColumns>;

export const VirtualizedTable = <
  TData extends TableRow<TData>,
  TValue,
  TColumns extends ColumnDef<TData, TValue>[]
>({
  data,
  columns,
  pageSize,
  singleSelect,
  singleSelectGroupName,
  enableExpanding,
  enableSorting,
  enableFilters,
  enableRowSelection,
  expandOnSelect,
  renderSubComponent,
  ...rest
}: VirtualizedTableProps<TData, TValue, TColumns>) => {
  if (pageSize && pageSize < 1) {
    throw new Error('Page size must be greater than or equal to 1');
  }

  const memoizedData = useMemo(() => [...data], [data]);

  const memoizedColumns = useMemo(() => {
    let modifiedColumns: ColumnDef<TData, TValue>[] = columns;

    if (enableRowSelection) {
      modifiedColumns = withSelectColumn({
        columns: modifiedColumns,
        singleSelect,
        singleSelectGroupName,
        expandOnSelect,
      });
    }

    if (enableExpanding) {
      modifiedColumns = withExpandColumn({
        columns: modifiedColumns,
        expandOnSelect,
      });
    }

    return modifiedColumns;
  }, [
    columns,
    expandOnSelect,
    enableExpanding,
    enableRowSelection,
    singleSelect,
    singleSelectGroupName,
  ]);

  const table = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    enableRowSelection,
    enableMultiRowSelection: !singleSelect,
    enableSorting,
    enableFilters,
    enableExpanding,
    getRowCanExpand: (row) =>
      renderSubComponent ? !!renderSubComponent({ row }) : !!row.subRows.length,
    getIsRowExpanded:
      enableExpanding && expandOnSelect && enableRowSelection
        ? (row) => row.getIsSelected()
        : undefined,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: pageSize ? getPaginationRowModel() : undefined,
    getFilteredRowModel: enableFilters ? getFilteredRowModel() : undefined,
    getExpandedRowModel: enableExpanding ? getExpandedRowModel() : undefined,
    getSortedRowModel: enableSorting ? getSortedRowModel() : undefined,
  });

  const { setPageSize } = table;
  const tableContainerRef = useRef<HTMLDivElement>(null);
  const { rows } = table.getRowModel();

  const virtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 10,
  });

  useEffect(() => {
    if (pageSize) {
      setPageSize(pageSize);
    }
  }, [setPageSize, pageSize]);

  return (
    <div ref={tableContainerRef} sx={{ ...rest, overflow: 'auto' }}>
      <table sx={{ width: '100%', borderRadius: 'xl', overflow: 'clip' }}>
        <TableHeader {...table} />
        <TableBody
          rows={rows}
          virtualizer={virtualizer}
          renderSubComponent={renderSubComponent}
        />
      </table>
    </div>
  );
};

Table.Virtualized = VirtualizedTable;

export default Table;
