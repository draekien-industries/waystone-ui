/** @jsxImportSource theme-ui */
import { spinnerCss, SpinnerProps } from './spinner.styles';

/** A terminal style loading spinner */
export const Spinner = ({
  size = 'md',
  color = 'accent',
  fullWidth = false,
}: SpinnerProps) => <span sx={spinnerCss({ size, color, fullWidth })} />;

export type { SpinnerProps };
