'use client';

import type { Meta, StoryObj } from '@storybook/react';
import {
  TableBody,
  TableContainer,
  TableHead,
  getCoreRowModel,
  getMeasureElement,
  getSortedRowModel,
  useReactTable,
  useVirtualizer,
} from '@waystone/table';
import { useRef } from 'react';
import { columns, makeData } from './utils';

const data = makeData(100, 5, 3);

const VirtualTable = () => {
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
};

const meta: Meta = {
  render: VirtualTable,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `const table = useReactTable({
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
  estimateSize: () => 24,
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
    }}>
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
);`,
      },
    },
  },
};

export default meta;

export const Example: StoryObj<typeof meta> = {};
