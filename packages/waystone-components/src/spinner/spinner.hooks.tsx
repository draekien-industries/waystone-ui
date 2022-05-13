import React from 'react';
import { Spinner } from './spinner';

/** The props for the {@link useSpinner} hook */
export interface UseSpinnerProps {
  /**
   * Whether the spinner should be visible initially.
   * @default false
   */
  initialVisible?: boolean;
  /**
   * Whether the spinner should cover the full screen.
   * Use `position: relative` on the parent container to prevent the spinner from covering
   * the entire screen.
   * @default true
   */
  overlay?: boolean;
}

/**
 * A hook that manages the visibility of a spinner. Allows for the
 * spinner to be shown and hidden programmatically. You must
 * position the returned `spinner` element within the DOM.
 * @param props - the {@link UseSpinnerProps}
 * @param props.initialVisible - Whether the spinner should be visible initially. Defaults to `false`
 * @returns the spinner element and a `show` and `hide` function.
 */
export const useSpinner = (props?: UseSpinnerProps) => {
  const [visible, setVisible] = React.useState(props?.initialVisible ?? false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const spinner = visible && <Spinner overlay={props?.overlay ?? true} />;

  return { show, hide, spinner };
};
