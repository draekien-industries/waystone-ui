import { getSpinnerCss } from './spinner.styles';
import type { SpinnerProps } from './spinner.types';

export const Spinner = (props: SpinnerProps) => (
  <div sx={getSpinnerCss(props)} aria-description="Loading..." />
);
