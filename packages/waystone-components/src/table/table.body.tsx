/** @jsxImportSource theme-ui */
import { flexRender, Table } from '@tanstack/react-table';
import { Fragment, ReactElement } from 'react';
import { useIsDarkMode } from '../hooks';
import { RenderSubComponentProps, TableRow } from './table.types';

export type TableBodyProps<TData extends TableRow<TData>> = {
  renderSubComponent?: (props: RenderSubComponentProps<TData>) => ReactElement;
} & Table<TData>;

const getBackgroundColor = (darkMode: boolean, disabled: boolean) => {
  if (darkMode) {
    return disabled ? 'b-600' : 'b-700';
  }

  return disabled ? 'b-200' : 'b-100';
};

export const TableBody = <TData extends TableRow<TData>>({
  renderSubComponent,
  ...rest
}: TableBodyProps<TData>) => {
  const darkMode = useIsDarkMode();

  return (
    <tbody>
      {rest.getRowModel().rows.map((row) => {
        const disabled = !row.getCanSelect();

        return (
          <Fragment key={row.id}>
            <tr
              sx={{
                backgroundColor: getBackgroundColor(darkMode, disabled),
                color: disabled ? 'b-400' : 'text',
              }}
            >
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  sx={{
                    minWidth: cell.column.getSize(),
                    maxWidth: cell.column.getSize(),
                    paddingY: 'xs',
                    paddingX: 'md',
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
            {renderSubComponent && row.getIsExpanded() && row.getCanExpand() && (
              <tr>
                <td
                  sx={{
                    padding: 'xs',
                    backgroundColor: getBackgroundColor(darkMode, disabled),
                    color: disabled ? 'b-400' : 'text',
                  }}
                  colSpan={row.getVisibleCells().length}
                >
                  {renderSubComponent({ row })}
                </td>
              </tr>
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
};

export default TableBody;
