import type React from 'react';
import type { CanLoad } from '../common';
import type { SpinnerProps } from './spinner';
import { Spinner } from './spinner';

export type WithSpinnerProps = SpinnerProps & CanLoad;

export function withSpinner<T extends WithSpinnerProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const ComponentWithSpinner = (props: T) => {
    const { loading } = props;

    return loading ? <Spinner {...props} /> : <WrappedComponent {...props} />;
  };

  return ComponentWithSpinner;
}
