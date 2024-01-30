import { Overlay } from '../overlay/overlay';
import { spinnerCss, SpinnerCssProps } from './spinner.styles';

export interface SpinnerProps extends SpinnerCssProps {
  /**
   * Renders the spinner with an overlay that takes up the full
   * width and height of the parent container.
   */
  overlay?: boolean;
}

/** A terminal style loading spinner */
export const Spinner = ({
  size = 'md',
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
