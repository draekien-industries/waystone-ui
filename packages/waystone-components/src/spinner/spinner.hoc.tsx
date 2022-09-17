import React from 'react';
import { CanLoad } from '../common';
import { Spinner, SpinnerProps } from './spinner';

export interface WithSpinnerProps extends SpinnerProps, CanLoad {}

export function withSpinner<T extends WithSpinnerProps>(
  WrappedComponent: React.ComponentType<T>
) {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  const ComponentWithSpinner = (props: T) => {
    const { loading } = props;

    return loading ? <Spinner {...props} /> : <WrappedComponent {...props} />;
  };

  ComponentWithSpinner.displayName = `withSpinner(${displayName})`;

  return ComponentWithSpinner;
}
