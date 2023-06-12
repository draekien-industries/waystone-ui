/** @jsxImportSource theme-ui */
import { Row } from '@tanstack/react-table';
import { Fragment, ReactElement } from 'react';
import { useVirtual } from 'react-virtual';
import { TableCell } from './table.cell';
import { TableRow } from './table.row';
import { TableRowSubComponent } from './table.row.subComponent';
import { RenderSubComponentProps, TableRowData } from './table.types';

export type TableBodyProps<TData extends TableRowData<TData>> = {
  renderSubComponent?: (props: RenderSubComponentProps<TData>) => ReactElement;
  rows: Row<TData>[];
  virtualizer?: ReturnType<typeof useVirtual>;
};

export const TableBody = <TData extends TableRowData<TData>>({
  renderSubComponent,
  rows,
  virtualizer,
}: TableBodyProps<TData>) => {
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
              <TableRow
                disabled={disabled}
                cells={row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} cell={cell} />
                ))}
              />
              <TableRowSubComponent
                visible={row.getIsExpanded()}
                colSpan={row.getVisibleCells().length}
              >
                {renderSubComponent && renderSubComponent({ row })}
              </TableRowSubComponent>
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
            <TableRow
              disabled={disabled}
              cells={row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id} cell={cell} />
              ))}
            />
            <TableRowSubComponent
              visible={row.getIsExpanded()}
              colSpan={row.getVisibleCells().length}
            >
              {renderSubComponent && renderSubComponent({ row })}
            </TableRowSubComponent>
          </Fragment>
        );
      })}
    </tbody>
  );
};

export default TableBody;
