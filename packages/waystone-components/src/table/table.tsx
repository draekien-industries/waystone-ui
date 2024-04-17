'use client';

import type { ColumnDef, TableState } from '@tanstack/react-table';
import {
  getCoreRowModel,
  getExpandedRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { isDeepEqual, usePrevious } from '@waystone/utils';
import { useEffect, useMemo, useRef } from 'react';
import type { ThemeUIStyleObject } from 'theme-ui';
import type { HasHeight } from '../common';
import { TableBody } from './table.body';
import { withExpandColumn, withSelectColumn } from './table.fx';
import { TableHeader } from './table.header';
import { TablePagination } from './table.pagination';
import type { TableProps, TableRowData } from './table.types';

const tableCss: ThemeUIStyleObject = {
  borderCollapse: 'collapse',
  minWidth: '400px',
  width: '100%',
  boxShadow: 'medium',
};

export const Table = <TData extends TableRowData<TData>, TValue = unknown>({
  data,
  columns,
  pageSize,
  enableExpanding,
  enableSorting,
  enableFilters,
  enableRowSelection,
  expandOnSelect,
  renderSubComponent,
  onChange,
  ...rest
}: TableProps<TData, TValue>) => {
  if (pageSize && pageSize < 1) {
    throw new Error('Page size must be greater than or equal to 1');
  }

  const memoizedData = useMemo(() => [...data], [data]);

  const memoizedColumns = useMemo(() => {
    let modifiedColumns: ColumnDef<TData, TValue>[] = columns;

    if (enableRowSelection) {
      modifiedColumns = withSelectColumn({
        columns: modifiedColumns,
        expandOnSelect,
        ...rest,
      });
    }

    if (enableExpanding) {
      modifiedColumns = withExpandColumn({
        columns: modifiedColumns,
        expandOnSelect,
      });
    }

    return modifiedColumns;
  }, [columns, expandOnSelect, enableExpanding, enableRowSelection, rest]);

  const table = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    enableRowSelection,
    enableMultiRowSelection: !rest.singleSelect,
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
  const state: TableState = table.getState();
  const previousState = usePrevious(state);

  useEffect(() => {
    if (!onChange) return;
    if (isDeepEqual(state, previousState)) return;

    onChange(state);
  }, [state, previousState, onChange]);

  useEffect(() => {
    if (pageSize) {
      setPageSize(pageSize);
    }
  }, [setPageSize, pageSize]);

  return (
    <>
      <table sx={tableCss}>
        <TableHeader {...table} />
        <TableBody renderSubComponent={renderSubComponent}>{rows}</TableBody>
      </table>
      {pageSize && <TablePagination {...table} />}
    </>
  );
};

export type VirtualizedTableProps<
  TData extends TableRowData<TData>,
  TValue,
> = HasHeight & TableProps<TData, TValue>;

export const VirtualizedTable = <TData extends TableRowData<TData>, TValue>({
  data,
  columns,
  pageSize,
  enableExpanding,
  enableSorting,
  enableFilters,
  enableRowSelection,
  expandOnSelect,
  renderSubComponent,
  onChange,
  ...rest
}: VirtualizedTableProps<TData, TValue>) => {
  if (pageSize && pageSize < 1) {
    throw new Error('Page size must be greater than or equal to 1');
  }

  const memoizedData = useMemo(() => [...data], [data]);

  const memoizedColumns = useMemo(() => {
    let modifiedColumns: ColumnDef<TData, TValue>[] = columns;

    if (enableRowSelection) {
      modifiedColumns = withSelectColumn({
        columns: modifiedColumns,
        expandOnSelect,
        ...rest,
      });
    }

    if (enableExpanding) {
      modifiedColumns = withExpandColumn({
        columns: modifiedColumns,
        expandOnSelect,
      });
    }

    return modifiedColumns;
  }, [columns, expandOnSelect, enableExpanding, enableRowSelection, rest]);

  const table = useReactTable({
    data: memoizedData,
    columns: memoizedColumns,
    enableRowSelection,
    enableMultiRowSelection: !rest.singleSelect,
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
  const state = table.getState();
  const previousState = usePrevious(state);

  const virtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => 41,
    overscan: 5,
  });

  useEffect(() => {
    if (pageSize) {
      setPageSize(pageSize);
    }
  }, [setPageSize, pageSize]);

  useEffect(() => {
    if (!onChange) return;
    if (isDeepEqual(state, previousState)) return;

    onChange(state);
  }, [state, previousState, onChange]);

  const { singleSelect: _, ...styles } = rest;

  return (
    <div
      ref={tableContainerRef}
      sx={{
        ...styles,
        height: styles.height ?? 600,
        overflow: 'auto',
        borderBottom: '2px solid',
        borderBottomColor: 'p-400',
      }}
    >
      <div
        sx={{
          height: `${virtualizer.getTotalSize()}px`,
        }}
      >
        <table
          sx={{
            ...tableCss,
          }}
        >
          <TableHeader {...table} />
          <TableBody
            virtualizer={virtualizer}
            renderSubComponent={renderSubComponent}
          >
            {rows}
          </TableBody>
        </table>
      </div>
    </div>
  );
};

Table.Virtualized = VirtualizedTable;

export default Table;
