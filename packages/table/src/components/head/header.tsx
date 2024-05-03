import { flexRender, type Header } from '@tanstack/react-table';
import type { PropsWithChildren } from 'react';
import { Box } from 'theme-ui';

export const TableHeader = <D, V>({
  id,
  colSpan,
  isPlaceholder,
  column,
  getContext,
  children,
}: PropsWithChildren<Header<D, V>>) => (
  <th id={id} colSpan={colSpan}>
    {!isPlaceholder && (
      <Box>
        {flexRender(column.columnDef.header, getContext())}
        {children}
      </Box>
    )}
  </th>
);
