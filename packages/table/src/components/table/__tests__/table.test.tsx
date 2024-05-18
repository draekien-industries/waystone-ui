/* eslint-disable react/jsx-props-no-spreading */
import {
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
  type ExpandedState,
} from '@tanstack/react-table';
import { render, screen, userEvent } from '@waystone/testing-library';
import { useState } from 'react';
import { columns, data } from '../../../__fixtures__';
import { TableBody } from '../table.body';
import { TableContainer } from '../table.container';
import { TableHead } from '../table.head';

function ExampleTable() {
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
}

describe('<Table />', () => {
  it('should match snapshot', () => {
    const { container } = render(<ExampleTable />);

    expect(container).toMatchSnapshot();
  });

  it('should expand the table when the expand button in the header is clicked', async () => {
    const user = userEvent.setup({ delay: null });

    render(<ExampleTable />);

    const expandAllButton = screen.getAllByText('expand_more')[0];

    await user.click(expandAllButton);

    const expandAllButtons = screen.queryAllByText('expand_more');
    const collapseAllButtons = await screen.findAllByText('expand_less');

    expect(expandAllButtons).toHaveLength(0);
    expect(collapseAllButtons.length).toBeGreaterThan(0);
  });
});
