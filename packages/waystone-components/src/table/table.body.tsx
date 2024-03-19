'use client';

import type { Row } from '@tanstack/react-table';
import type { useVirtualizer, VirtualItem } from '@tanstack/react-virtual';
import { alpha } from '@theme-ui/color';
import type { ReactElement } from 'react';
import { Fragment } from 'react';
import type { ThemeUIStyleObject } from 'theme-ui';
import { TableCell } from './table.cell';
import { TableRow, VirtualTableRow } from './table.row';
import { TableRowSubComponent } from './table.row.subComponent';
import type { RenderSubComponentProps, TableRowData } from './table.types';
import { getPaddingBottom, getPaddingTop } from './table.utils';

export type TableBodyProps<TData extends TableRowData<TData>> = {
  renderSubComponent?: (props: RenderSubComponentProps<TData>) => ReactElement;
  children: Row<TData>[];
  virtualizer?: ReturnType<typeof useVirtualizer<HTMLDivElement, Element>>;
};

const VirtualizedTopRow = (props: VirtualItem[]) => {
  const paddingTop = getPaddingTop(props);

  return (
    paddingTop > 0 && (
      <tr>
        <td sx={{ height: `${paddingTop}px` }} />
      </tr>
    )
  );
};

const VirtualizedBottomRow = ({
  virtualRows,
  totalSize,
}: {
  virtualRows: VirtualItem[];
  totalSize: number;
}) => {
  const paddingBottom = getPaddingBottom(virtualRows, totalSize);

  return (
    paddingBottom > 0 && (
      <tr>
        <td sx={{ height: `${paddingBottom}px` }} />
      </tr>
    )
  );
};

const VirtualizedContentRows = <TData extends TableRowData<TData>>({
  virtualRows,
  children,
  renderSubComponent,
}: {
  virtualRows: VirtualItem[];
} & Pick<TableBodyProps<TData>, 'children' | 'renderSubComponent'>) => (
  <>
    {virtualRows.map((virtualRow, index) => {
      const row = children[virtualRow.index];
      const disabled = !row.getCanSelect();

      return (
        <Fragment key={row.id}>
          <VirtualTableRow
            disabled={disabled}
            virtualRow={virtualRow}
            index={index}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>{cell}</TableCell>
            ))}
          </VirtualTableRow>
          <TableRowSubComponent
            visible={row.getIsExpanded()}
            colSpan={row.getVisibleCells().length}
          >
            {renderSubComponent && renderSubComponent({ row })}
          </TableRowSubComponent>
        </Fragment>
      );
    })}
  </>
);

const tableBodyCss: ThemeUIStyleObject = {
  'tr:nth-of-type(even)': {
    backgroundColor: alpha('b-400', 0.1),
  },
};

const VirtualizedTableBody = <TData extends TableRowData<TData>>({
  renderSubComponent,
  children,
  virtualizer,
}: TableBodyProps<TData> &
  Required<Pick<TableBodyProps<TData>, 'virtualizer'>>) => {
  const { getVirtualItems } = virtualizer;

  const virtualRows = getVirtualItems();

  return (
    <tbody
      sx={{
        ...tableBodyCss,
      }}
    >
      <VirtualizedContentRows {...{ virtualRows, renderSubComponent }}>
        {children}
      </VirtualizedContentRows>
    </tbody>
  );
};

const ConcreteTableBody = <TData extends TableRowData<TData>>({
  renderSubComponent,
  children,
}: Omit<TableBodyProps<TData>, 'virtualizer'>) => (
  <tbody sx={tableBodyCss}>
    {children.map((row) => {
      const disabled = !row.getCanSelect();

      return (
        <Fragment key={row.id}>
          <TableRow disabled={disabled}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>{cell}</TableCell>
            ))}
          </TableRow>
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

export const TableBody = <TData extends TableRowData<TData>>({
  renderSubComponent,
  children,
  virtualizer,
}: TableBodyProps<TData>) => {
  if (virtualizer) {
    return (
      <VirtualizedTableBody
        renderSubComponent={renderSubComponent}
        virtualizer={virtualizer}
      >
        {children}
      </VirtualizedTableBody>
    );
  }

  return (
    <ConcreteTableBody renderSubComponent={renderSubComponent}>
      {children}
    </ConcreteTableBody>
  );
};

export default TableBody;
