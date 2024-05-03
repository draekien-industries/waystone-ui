'use client';

import {
  CheckboxCell,
  CheckboxHeader,
  TableHeader,
  TableRow,
  WaystoneTable,
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
  {
    id: 'selector',
    header: CheckboxHeader,
    cell: CheckboxCell,
  },
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

const data = makeData(100, 5, 3);

const ExampleTable = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
    debugTable: true,
  });

  return (
    <WaystoneTable>
      <thead>
        {table.getHeaderGroups().map((group) => (
          <tr key={group.id}>
            {group.headers.map((header) => (
              <TableHeader key={header.id} {...header} />
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} {...row} />
        ))}
      </tbody>
    </WaystoneTable>
  );
};

const meta: Meta<typeof WaystoneTable> = {
  title: 'Components/WaystoneTable',
  component: WaystoneTable,
  render: ExampleTable,
};

export default meta;

export const Basic: StoryObj<typeof meta> = {};
