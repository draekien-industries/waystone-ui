import { ReactNode, useMemo } from 'react';
import { useIsDarkMode } from '../hooks';

export type TableRowProps = {
  disabled?: boolean;
  cells: ReactNode;
};

const getBackgroundColor = (darkMode: boolean, disabled: boolean) => {
  if (darkMode) {
    return disabled ? 'b-600' : 'b-700';
  }

  return disabled ? 'b-200' : 'b-100';
};

export const TableRow = ({ disabled = false, cells }: TableRowProps) => {
  const darkMode = useIsDarkMode();

  const backgroundColor = useMemo(
    () => getBackgroundColor(darkMode, disabled),
    [darkMode, disabled]
  );

  return (
    <tr
      sx={{
        backgroundColor,
        color: disabled ? 'b-400' : 'text',
      }}
    >
      {cells}
    </tr>
  );
};
