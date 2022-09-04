import React from 'react';
import { CanLoad } from '../common';
import { Spinner } from './spinner';

export const withSpinner =
  <P extends object>(
    Component: React.ComponentType<P & CanLoad>
  ): React.FC<P & CanLoad> =>
  // eslint-disable-next-line react/display-name
  ({ loading, ...props }: CanLoad) =>
    loading ? <Spinner /> : <Component {...(props as P)} />;
