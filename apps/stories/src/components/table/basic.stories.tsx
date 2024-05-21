'use client';

import type { Meta, StoryObj } from '@storybook/react';
import type { ExpandedState } from '@waystone/table';
import {
  TableBody,
  TableContainer,
  TableHead,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from '@waystone/table';
import { useState } from 'react';
import { columns, makeData } from './utils';

const data = makeData(20, 5, 3);

const ExampleTable = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const { getHeaderGroups, getRowModel } = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    debugTable: true,
  });

  return (
    <TableContainer>
      <TableHead>
        {getHeaderGroups().map((group) => (
          <TableHead.Row key={group.id} {...group} />
        ))}
      </TableHead>
      <TableBody>
        {getRowModel().rows.map((row) => (
          <TableBody.Row key={row.id} {...row} />
        ))}
      </TableBody>
    </TableContainer>
  );
};

const meta: Meta = {
  render: ExampleTable,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `const [expanded, setExpanded] = useState<ExpandedState>({});

const { getHeaderGroups, getRowModel } = useReactTable({
  data,
  columns,
  state: {
    expanded,
  },
  onExpandedChange: setExpanded,
  getSubRows: (row) => row.subRows,
  getCoreRowModel: getCoreRowModel(),
  getExpandedRowModel: getExpandedRowModel(),
  debugTable: true,
});

return (
  <TableContainer>
    <TableHead>
      {getHeaderGroups().map((group) => (
        <TableHead.Row key={group.id} {...group} />
      ))}
    </TableHead>
    <TableBody>
      {getRowModel().rows.map((row) => (
        <TableBody.Row key={row.id} {...row} />
      ))}
    </TableBody>
  </TableContainer>
);`,
      },
    },
  },
};

export default meta;

export const Basic: StoryObj<typeof meta> = {};
