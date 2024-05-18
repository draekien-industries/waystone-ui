/* eslint-disable react/jsx-props-no-spreading */
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { render } from '@waystone/testing-library';
import { useRef } from 'react';
import { columns, virtualizableData as data } from '../../../__fixtures__';
import { getMeasureElement } from '../../../utils';
import { TableBody } from '../table.body';
import { TableContainer } from '../table.container';
import { TableHead } from '../table.head';

function VirtualTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  const { rows } = table.getRowModel();

  // the virtualizer needs to know the scrollable container element
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => 42,
    getScrollElement: () => tableContainerRef.current,
    measureElement: getMeasureElement(),
    overscan: 5,
  });

  return (
    <div
      ref={tableContainerRef}
      style={{
        overflow: 'auto',
        position: 'relative',
        height: 800,
      }}
    >
      <TableContainer.Virtualized>
        <TableHead.Virtualized>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableHead.Row.Virtualized key={headerGroup.id} {...headerGroup} />
          ))}
        </TableHead.Virtualized>
        <TableBody.Virtualized {...rowVirtualizer}>
          {rowVirtualizer.getVirtualItems().map((virtualRow) => {
            const row = rows[virtualRow.index];

            return (
              <TableBody.Row.Virtualized
                key={row.id}
                start={virtualRow.start}
                measureElement={rowVirtualizer.measureElement}
                {...row}
              />
            );
          })}
        </TableBody.Virtualized>
      </TableContainer.Virtualized>
    </div>
  );
}

describe('<Table />', () => {
  it('should match snapshot', () => {
    const { container } = render(<VirtualTable />);

    expect(container).toMatchSnapshot();
  });
});
