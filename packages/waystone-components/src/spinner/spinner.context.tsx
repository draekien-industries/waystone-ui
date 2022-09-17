import React, { PropsWithChildren } from 'react';
import { useSpinner } from './spinner.hooks';

/** The value provided by the {@link SpinnerContext} */
export interface SpinnerContextValue {
  /** A function that shows the spinner. */
  show?: () => void;
  /** A function that hides the spinner. */
  hide?: () => void;
}

export interface SpinnerProviderProps {
  initialVisible?: boolean;
}

/** The context for the {@link SpinnerContextValue} */
export const SpinnerContext = React.createContext<SpinnerContextValue>({});

/**
 * A component that provides the {@link SpinnerContextValue} to its children
 * and renders the spinner component onto the DOM.
 * @param props.children - the children of the component
 * @returns the spinner context provider
 */
export const SpinnerProvider: React.FC<
  PropsWithChildren<SpinnerProviderProps>
> = ({ initialVisible = true, children }) => {
  const { show, hide, spinner } = useSpinner({ initialVisible });
  const value = React.useMemo(() => ({ show, hide }), [show, hide]);

  return (
    <SpinnerContext.Provider value={value}>
      {children}
      {spinner}
    </SpinnerContext.Provider>
  );
};

/**
 * A hook that provides access to the {@link SpinnerContextValue} when
 * used within a {@link SpinnerProvider}.
 * @returns the spinner context value
 */
export const useSpinnerContext = () => {
  const context = React.useContext(SpinnerContext);
  if (!context) {
    throw new Error(
      '"useSpinnerContext" must be used within a "SpinnerProvider"'
    );
  }

  return context;
};
