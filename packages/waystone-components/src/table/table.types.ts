import { Row } from '@tanstack/react-table';

export type TableRow<TValue = unknown> = {
  subRows?: TValue[];
};

export type RenderSubComponentProps<TData extends TableRow<TData>> = {
  row: Row<TData>;
};
