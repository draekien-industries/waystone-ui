import { Row } from '@tanstack/react-table';

export type TableRowData<TValue = unknown> = {
  subRows?: TValue[];
};

export type RenderSubComponentProps<TData extends TableRowData<TData>> = {
  row: Row<TData>;
};
