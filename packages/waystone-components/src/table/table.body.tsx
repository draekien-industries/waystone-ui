'use client';

import { Row } from '@tanstack/react-table';
import { useVirtualizer, VirtualItem } from '@tanstack/react-virtual';
import { Fragment, ReactElement } from 'react';
import { ThemeUIStyleObject } from 'theme-ui';
import { alpha } from '@theme-ui/color';
import { TableCell } from './table.cell';
import { TableRow } from './table.row';
import { TableRowSubComponent } from './table.row.subComponent';
import { RenderSubComponentProps, TableRowData } from './table.types';
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
    {virtualRows.map((virtualRow) => {
      const row = children[virtualRow.index];
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
            colSpan={row.getVisibleCells().length}>
            {renderSubComponent && renderSubComponent({ row })}
          </TableRowSubComponent>
        </Fragment>
      );
    })}
  </>
);

const tableBodyCss: ThemeUIStyleObject = {
  'tr:last-of-type': {
    borderBottom: '2px solid',
    borderBottomColor: 'p-400',
  },
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
  const { getTotalSize, getVirtualItems } = virtualizer;

  const virtualRows = getVirtualItems();
  const totalSize = getTotalSize();

  return (
    <tbody sx={tableBodyCss}>
      <VirtualizedTopRow {...virtualRows} />
      <VirtualizedContentRows {...{ virtualRows, renderSubComponent }}>
        {children}
      </VirtualizedContentRows>
      <VirtualizedBottomRow {...{ virtualRows, totalSize }} />
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
            colSpan={row.getVisibleCells().length}>
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
        virtualizer={virtualizer}>
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
