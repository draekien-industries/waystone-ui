import { faker } from '@faker-js/faker';
import { createInteractiveColumn, type ColumnDef } from '@waystone/table';

faker.seed(5533201);

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
  ])[0]!,
});

export function makeData(...lens: number[]) {
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

export const columns: ColumnDef<Person>[] = [
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
