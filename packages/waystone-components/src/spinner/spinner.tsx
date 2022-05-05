/** @jsxImportSource theme-ui */
import { spinnerCss, SpinnerCssProps } from './spinner.styles';
import { Overlay } from '../overlay/overlay';

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

  return <span sx={spinnerCss({ size, color, fullWidth })} />;
};
