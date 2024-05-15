'use client';

import {
  TableBody,
  TableContainer,
  TableHead,
  createInteractiveColumn,
  getCoreRowModel,
  getExpandedRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@waystone/table';
import type { ExpandedState, ColumnDef } from '@waystone/table';
import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: 'relationship' | 'complicated' | 'single';
  subRows?: Person[];
};

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): Person => ({
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  age: faker.number.int(40),
  visits: faker.number.int(1000),
  progress: faker.number.int(100),
  status: faker.helpers.shuffle<Person['status']>([
    'relationship',
    'complicated',
    'single',
  ])[0]!,
});

function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!;
    return range(len).map(
      (): Person => ({
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      })
    );
  };

  return makeDataLevel();
}

const columns: ColumnDef<Person>[] = [
  createInteractiveColumn<Person>(),
  {
    accessorKey: 'firstName',
    header: 'First Name',
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'age',
    header: 'Age',
  },
  {
    accessorKey: 'visits',
    header: 'Visits',
  },
  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'progress',
    header: 'Progress',
  },
];

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

const meta: Meta<typeof TableContainer> = {
  title: 'Components/WaystoneTable',
  component: TableContainer,
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
