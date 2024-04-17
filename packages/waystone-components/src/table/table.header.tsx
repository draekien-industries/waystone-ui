'use client';

import type { Table } from '@tanstack/react-table';
import { flexRender } from '@tanstack/react-table';
import { useIsDarkMode } from '../hooks';

export const TableHeader = <TData,>({ getHeaderGroups }: Table<TData>) => {
  const darkMode = useIsDarkMode();

  return (
    <thead
      sx={{
        backgroundColor: 'p-400',
        position: 'sticky',
        top: 0,
        zIndex: 1,
      }}>
      {getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              colSpan={header.colSpan}
              sx={{
                width: header.getSize(),
                color: 'b-900',
                paddingY: 'small',
                paddingX: 'medium',
                textAlign: 'left',
                fontWeight: 'semibold',
              }}>
              {!header.isPlaceholder &&
                flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};

export default TableHeader;
