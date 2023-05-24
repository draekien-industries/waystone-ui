/** @jsxImportSource theme-ui */
import { flexRender, Table } from '@tanstack/react-table';
import { useIsDarkMode } from '../hooks';

export const TableHeader = <TData,>({ getHeaderGroups }: Table<TData>) => {
  const darkMode = useIsDarkMode();

  return (
    <thead sx={{ backgroundColor: darkMode ? 's-700' : 'primary' }}>
      {getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              colSpan={header.colSpan}
              sx={{ width: header.getSize(), paddingY: 'xs', paddingX: 'md' }}
            >
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
