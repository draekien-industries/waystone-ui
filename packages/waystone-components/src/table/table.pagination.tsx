'use client';

import type { Table } from '@tanstack/react-table';
import { Box, Flex } from 'theme-ui';
import { Button } from '../button';
import type { TableRowData } from './table.types';
import { Text } from '../text';

export type TablePaginationProps<TData extends TableRowData<TData>> =
  Table<TData>;

export const TablePagination = <TData extends TableRowData<TData>>(
  props: TablePaginationProps<TData>
) => {
  const {
    setPageIndex,
    getCanPreviousPage,
    previousPage,
    getState,
    getPageCount,
    nextPage,
    getCanNextPage,
  } = props;

  return (
    <Flex sx={{ marginY: 'md', gap: 'small', justifyContent: 'center' }}>
      <Button
        onClick={() => setPageIndex(0)}
        disabled={!getCanPreviousPage()}
        icon={{ name: 'first_page' }}
      />
      <Button
        onClick={() => previousPage()}
        disabled={!getCanPreviousPage()}
        icon={{ name: 'navigate_before' }}
      />

      <Box sx={{ width: '10rem', textAlign: 'center' }}>
        <Text>
          Page{' '}
          <Text as="span" variant="eyebrow" inline>
            {getState().pagination.pageIndex + 1}
          </Text>{' '}
          of{' '}
          <Text as="span" variant="eyebrow" inline>
            {getPageCount()}
          </Text>
        </Text>
      </Box>

      <Button
        onClick={() => nextPage()}
        disabled={!getCanNextPage()}
        icon={{ name: 'navigate_next' }}
      />
      <Button
        onClick={() => setPageIndex(getPageCount() - 1)}
        disabled={!getCanNextPage()}
        icon={{ name: 'last_page' }}
      />
    </Flex>
  );
};

export default TablePagination;
