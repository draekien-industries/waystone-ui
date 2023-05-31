import { ReactNode } from 'react';

export type TableRowSubComponentProps = {
  colSpan: number;
  visible: boolean;
  children?: ReactNode;
};

export const TableRowSubComponent = ({
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
