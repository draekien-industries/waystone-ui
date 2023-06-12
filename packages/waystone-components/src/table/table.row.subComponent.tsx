import { memo, ReactNode } from 'react';

export type TableRowSubComponentProps = {
  colSpan: number;
  visible: boolean;
  children?: ReactNode;
};

const TableRowSubComponentContent = ({
  colSpan,
  visible,
  children,
}: TableRowSubComponentProps) => {
  if (!visible || !children) {
    return null;
  }

  return (
    <tr>
      <td sx={{ padding: 'xs' }} colSpan={colSpan}>
        {children}
      </td>
    </tr>
  );
};

export const TableRowSubComponent = memo(TableRowSubComponentContent);
