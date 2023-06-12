import { faker } from '@faker-js/faker';
import { ColumnDef } from '@tanstack/react-table';
import { render } from '../../__fixtures__';
import { Table } from '../table';

describe('Components: Table', () => {
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

  faker.seed(42);

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

  it('should match snapshot with default props', () => {
    const { container } = render(
      <Table data={makeData(100)} columns={columns} />
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with enableRowSelection prop', () => {
    const { container } = render(
      <Table data={makeData(100)} columns={columns} enableRowSelection />
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with enableExpanding prop', () => {
    const { container } = render(
      <Table data={makeData(100)} columns={columns} enableExpanding />
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with expandOnSelect prop', () => {
    const { container } = render(
      <Table
        data={makeData(100)}
        columns={columns}
        enableRowSelection
        expandOnSelect
      />
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot with singleSelect prop', () => {
    const { container } = render(
      <Table
        data={makeData(100)}
        columns={columns}
        enableRowSelection
        singleSelect
        singleSelectGroupName="table-radio"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
