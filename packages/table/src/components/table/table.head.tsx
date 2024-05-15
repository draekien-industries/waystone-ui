import type { PropsWithChildren } from 'react';
import type { ThemeUIStyleObject } from 'theme-ui';
import { TableHeadRow } from './table.head.row';
import { TableHeadCell } from './table.head.cell';

const style = {
  backgroundColor: 'p-400',
  position: 'sticky',
  top: 0,
  zIndex: 1,
} as const satisfies ThemeUIStyleObject;

export const TableHead = ({ children }: PropsWithChildren) => (
  <thead sx={style}>{children}</thead>
);

TableHead.Row = TableHeadRow;
TableHead.Cell = TableHeadCell;
