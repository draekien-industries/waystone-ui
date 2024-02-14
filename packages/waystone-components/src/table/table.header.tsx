'use client';

import { flexRender, Table } from '@tanstack/react-table';
import { useIsDarkMode } from '../hooks';

export const TableHeader = <TData,>({ getHeaderGroups }: Table<TData>) => {
  const darkMode = useIsDarkMode();

  return (
    <thead
      sx={{
        backgroundColor: 'p-400',
        position: 'sticky',
        top: 0,
      }}>
      {getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header, idx) => (
            <th
              key={header.id}
              colSpan={header.colSpan}
              sx={{
                width: header.getSize(),
                color: 'b-900',
                paddingY: 'sm',
                paddingX: 'md',
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
