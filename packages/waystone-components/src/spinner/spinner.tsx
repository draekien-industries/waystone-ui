import { Overlay } from '../overlay/overlay';
import type { SpinnerCssProps } from './spinner.styles';
import { spinnerCss } from './spinner.styles';

export type SpinnerProps = {
  /**
   * Renders the spinner with an overlay that takes up the full
   * width and height of the parent container.
   */
  overlay?: boolean;
} & SpinnerCssProps;

/** A terminal style loading spinner */
export const Spinner = ({
  size = 'medium',
  color = 'accent',
  fullWidth = false,
  overlay = false,
}: SpinnerProps) => {
  if (overlay) {
    return (
      <Overlay>
        <span
          sx={{
            ...spinnerCss({ size, color, fullWidth: true }),
            height: '100%',
            zIndex: 'highest',
            position: 'absolute',
          }}
        />
      </Overlay>
    );
  }

  return (
    <span
      role="progressbar"
      sx={spinnerCss({ size, color, fullWidth })}
      aria-valuetext="Loading..."
      aria-busy
    />
  );
};
