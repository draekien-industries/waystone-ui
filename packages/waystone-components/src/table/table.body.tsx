/** @jsxImportSource theme-ui */
import { flexRender, Row, Table } from '@tanstack/react-table';
import { Fragment, ReactElement } from 'react';
import { useVirtual, VirtualItem } from 'react-virtual';
import { useIsDarkMode } from '../hooks';
import { RenderSubComponentProps, TableRow } from './table.types';

export type TableBodyProps<TData extends TableRow<TData>> = {
  renderSubComponent?: (props: RenderSubComponentProps<TData>) => ReactElement;
  rows: Row<TData>[];
  virtualizer?: ReturnType<typeof useVirtual>;
};

const getBackgroundColor = (darkMode: boolean, disabled: boolean) => {
  if (darkMode) {
    return disabled ? 'b-600' : 'b-700';
  }

  return disabled ? 'b-200' : 'b-100';
};

export const TableBody = <TData extends TableRow<TData>>({
  renderSubComponent,
  rows,
  virtualizer,
}: TableBodyProps<TData>) => {
  const darkMode = useIsDarkMode();

  if (virtualizer) {
    const { virtualItems: virtualRows, totalSize } = virtualizer;

    const paddingTop =
      virtualRows.length > 0 ? virtualRows?.[0]?.start || 0 : 0;
    const paddingBottom =
      virtualRows.length > 0
        ? totalSize - (virtualRows?.[virtualRows.length - 1]?.end || 0)
        : 0;

    return (
      <tbody>
        {paddingTop > 0 && (
          <tr>
            <td sx={{ height: `${paddingTop}px` }} />
          </tr>
        )}
        {virtualRows.map((virtualRow) => {
          const row = rows[virtualRow.index];
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
        {paddingBottom > 0 && (
          <tr>
            <td sx={{ height: `${paddingBottom}px` }} />
          </tr>
        )}
      </tbody>
    );
  }

  return (
    <tbody>
      {rows.map((row) => {
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
