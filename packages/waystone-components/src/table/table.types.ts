import type {
  ColumnDef,
  Row,
  TableOptions,
  TableState,
} from '@tanstack/react-table';
import type { ReactElement } from 'react';

export type TableRowData<TData> = {
  subRows?: TData[];
};

export type RenderSubComponentProps<TData extends TableRowData<TData>> = {
  row: Row<TData>;
};

type SingleSelectOptions =
  | {
      singleSelect: true;
      singleSelectGroupName: string;
    }
  | {
      singleSelect?: false;
    };

export type WithSelectColumnParams<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  expandOnSelect?: boolean;
} & SingleSelectOptions;

export type TableProps<TData extends TableRowData<TData>, TValue> = {
  pageSize?: number;
  renderSubComponent?: (props: RenderSubComponentProps<TData>) => ReactElement;
  onChange?: (newState: TableState) => void;
} & Pick<
  TableOptions<TData>,
  | 'enableExpanding'
  | 'enableSorting'
  | 'enableFilters'
  | 'enableRowSelection'
  | 'data'
> &
  WithSelectColumnParams<TData, TValue>;
