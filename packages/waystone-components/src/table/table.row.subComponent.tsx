'use client';

import { memo, ReactNode } from 'react';
import { useIsDarkMode } from '../hooks';

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
  const darkMode = useIsDarkMode();

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
