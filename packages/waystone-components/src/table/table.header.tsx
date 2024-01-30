/** @jsxImportSource theme-ui */
import { flexRender, Table } from '@tanstack/react-table';
import { useIsDarkMode } from '../hooks';

export const TableHeader = <TData,>({ getHeaderGroups }: Table<TData>) => {
  const darkMode = useIsDarkMode();

  return (
    <thead
      sx={{
        backgroundColor: darkMode ? 'b-600' : 'b-200',
        position: 'sticky',
        top: 0,
      }}
    >
      {getHeaderGroups().map((headerGroup) => (
        <tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <th
              key={header.id}
              colSpan={header.colSpan}
              sx={{
                width: header.getSize(),
                paddingY: 'xs',
                paddingX: 'md',
                textAlign: 'left',
              }}
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
