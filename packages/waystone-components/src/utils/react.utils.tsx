import React from 'react';

export type FCC<P = Record<string, unknown>> = React.Component<
  React.PropsWithChildren<P>
>;
