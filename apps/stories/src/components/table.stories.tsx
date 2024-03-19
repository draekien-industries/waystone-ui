import { faker } from '@faker-js/faker';
import type { Meta, StoryObj } from '@storybook/react';
import type { ColumnDef, Row } from '@tanstack/react-table';
import {
  Card,
  Label,
  Text,
  type VirtualizedTableProps,
} from '@waystone/components';
import { Table } from '@waystone/components/src/table/table';
import { Flex } from 'theme-ui';

faker.seed(24601);

export type Person = {
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
  ])[0],
});

function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth];
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
    id: 'surname',
    header: 'Surname',
    accessorKey: 'lastName',
  },
  {
    header: 'Given name(s)',
    accessorKey: 'firstName',
  },
  {
    header: 'Status',
    accessorKey: 'status',
  },
];

const meta: Meta<typeof Table<Person>> = {
  title: 'Components/Table',
  component: Table,
  args: {
    data: makeData(100),
    columns,
  },
};

export const Basic = {
  args: {
    data: makeData(100),
    columns,
  },
};

export const SingleSelect = {
  args: {
    data: makeData(100),
    columns,
    enableRowSelection: true,
    singleSelect: true,
  },
};

export const CustomSelectLogic = {
  args: {
    data: makeData(100),
    columns,
    enableRowSelection: (row: Row<Person>) =>
      row.getValue<string>('surname').startsWith('D'),
  },
};

export const MultiSelect = {
  args: {
    data: makeData(100),
    columns,
    enableRowSelection: true,
  },
};

export const Paginated = {
  args: {
    data: makeData(1000),
    columns,
    pageSize: 50,
  },
};

export const ManualExpand = {
  args: {
    data: makeData(50, 5, 3),
    columns,
    enableExpanding: true,
  },
};

export const ExpandOnSelect = {
  args: {
    data: makeData(50, 5, 3),
    columns,
    enableExpanding: true,
    enableRowSelection: true,
    expandOnSelect: true,
  },
};

export const SubRowComponent = {
  args: {
    data: makeData(20),
    columns,
    enableExpanding: true,
    renderSubComponent: ({ row }: { row: Row<Person> }) => (
      <Card noShadow>
        <Flex sx={{ justifyContent: 'space-around' }}>
          <Text inline>
            <Label>Age:</Label> {row.original.age}
          </Text>
          <Text inline>
            <Label>Visits:</Label> {row.original.visits}
          </Text>
          <Flex sx={{ gap: 'sm', alignItems: 'center' }}>
            <Label htmlFor={`progress-${row.id}`}>Progress:</Label>{' '}
            <progress
              id={`progress-${row.id}`}
              max="100"
              value={row.original.progress}
            />
            <Text inline>{row.original.progress}</Text>
          </Flex>
        </Flex>
      </Card>
    ),
  },
};

export const ConditionalSubRowComponent = {
  args: {
    data: makeData(20),
    columns,
    enableExpanding: true,
    renderSubComponent: ({ row }: { row: Row<Person> }) =>
      [1, 2, 3].includes(parseInt(row.id, 10)) && (
        <Card noShadow>
          <Flex sx={{ justifyContent: 'space-around' }}>
            <Text inline>
              <Label>Age:</Label> {row.original.age}
            </Text>
            <Text inline>
              <Label>Visits:</Label> {row.original.visits}
            </Text>
            <Flex sx={{ gap: 'sm', alignItems: 'center' }}>
              <Label htmlFor={`progress-${row.id}`}>Progress:</Label>{' '}
              <progress
                id={`progress-${row.id}`}
                max="100"
                value={row.original.progress}
              />
              <Text inline>{row.original.progress}</Text>
            </Flex>
          </Flex>
        </Card>
      ),
  },
};

export const Virtualized = {
  args: {
    data: makeData(100),
    columns,
  },
  render: (args: VirtualizedTableProps<Person, unknown>) => (
    <Table.Virtualized {...args} height="500px" />
  ),
};

export default meta;
