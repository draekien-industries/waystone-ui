import { flexRender, type Header as HeaderProps } from '@tanstack/react-table';
import type { PropsWithChildren } from 'react';
import { Box } from 'theme-ui';

export const TableHeadCell = <D, V>({
  id,
  colSpan,
  isPlaceholder,
  column,
  children,
  getContext,
  getSize,
}: PropsWithChildren<HeaderProps<D, V>>) => (
  <th
    id={id}
    colSpan={colSpan}
    sx={{
      width: getSize(),
      color: 'b-900',
      paddingY: 'small',
      paddingX: 'medium',
      textAlign: 'left',
      fontWeight: 'semibold',
    }}
  >
    {!isPlaceholder && (
      <Box>
        {flexRender(column.columnDef.header, getContext())}
        {children}
      </Box>
    )}
  </th>
);
