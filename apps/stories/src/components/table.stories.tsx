import { Table } from '@waystone/components/src/table/table';
import { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker';
import { ColumnDef } from '@tanstack/react-table';
import { Card, Label, Text } from '@waystone/components';
import { Flex } from 'theme-ui';

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

const meta: Meta<typeof Table<Person, unknown, ColumnDef<Person>[]>> = {
  title: 'Components/Table',
  component: Table,
};

export const Basic: StoryObj<typeof meta> = {
  args: {
    data: makeData(100),
    columns,
  },
};

export const SingleSelect: StoryObj<typeof meta> = {
  args: {
    data: makeData(100),
    columns,
    enableRowSelection: true,
    singleSelect: true,
  },
};

export const CustomSelectLogic: StoryObj<typeof meta> = {
  args: {
    data: makeData(100),
    columns,
    enableRowSelection: (row) =>
      row.getValue<string>('surname').startsWith('D'),
  },
};

export const MultiSelect: StoryObj<typeof meta> = {
  args: {
    data: makeData(100),
    columns,
    enableRowSelection: true,
  },
};

export const Paginated: StoryObj<typeof meta> = {
  args: {
    data: makeData(1000),
    columns,
    pageSize: 50,
  },
};

export const ManualExpand: StoryObj<typeof meta> = {
  args: {
    data: makeData(50, 5, 3),
    columns,
    enableExpanding: true,
  },
};

export const ExpandOnSelect: StoryObj<typeof meta> = {
  args: {
    data: makeData(50, 5, 3),
    columns,
    enableExpanding: true,
    enableRowSelection: true,
    expandOnSelect: true,
  },
};

export const SubRowComponent: StoryObj<typeof meta> = {
  args: {
    data: makeData(20),
    columns,
    enableExpanding: true,
    renderSubComponent: ({ row }) => (
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

export const ConditionalSubRowComponent: StoryObj<typeof meta> = {
  args: {
    data: makeData(20),
    columns,
    enableExpanding: true,
    renderSubComponent: ({ row }) =>
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

export const Virtualized: StoryObj<typeof meta> = {
  args: {
    data: makeData(1000),
    columns,
  },
  render: (args) => <Table.Virtualized {...args} height="500px" />,
};

export default meta;
