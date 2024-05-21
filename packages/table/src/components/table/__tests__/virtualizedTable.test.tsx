/* eslint-disable react/jsx-props-no-spreading */
import {
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
  type Cell,
  type CellContext,
  type Column,
  type Row,
} from '@tanstack/react-table';
import { useVirtualizer } from '@tanstack/react-virtual';
import { render } from '@waystone/testing-library';
import { useRef } from 'react';
import { columns, virtualizableData as data } from '../../../__fixtures__';
import { getMeasureElement } from '../../../utils';
import { TableBody } from '../table.body';
import { TableBodyCell } from '../table.body.cell';
import { TableBodyRow } from '../table.body.row';
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

  describe('<TableBodyRow.Virtualized />', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <TableBodyRow.Virtualized
          id="1"
          getCanSelect={jest.fn().mockReturnValue(true)}
          getVisibleCells={jest.fn().mockReturnValue([])}
          start={1}
          measureElement={jest.fn()}
        />
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('<TableBodyCell.Virtualized />', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <TableBodyCell.Virtualized
          id="1"
          column={
            {
              getSize: () => 25,
              columnDef: columns[1],
            } as Column<unknown, unknown>
          }
          getContext={() =>
            ({
              row: { id: '1' } as Row<unknown>,
              cell: { id: '1' } as Cell<unknown, unknown>,
            }) as CellContext<unknown, unknown>
          }
        />
      );

      expect(container).toMatchSnapshot();
    });
  });
});
