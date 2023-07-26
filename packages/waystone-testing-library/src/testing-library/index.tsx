/** @jsxImportSource theme-ui */
import React, { PropsWithChildren, useEffect } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { useColorMode } from 'theme-ui';
import { Waystone } from '@waystone/theme';

const TestProvider = ({ children }: PropsWithChildren) => (
  <Waystone>{children}</Waystone>
);

const DarkModeWrapper = ({ children }: PropsWithChildren) => {
  const [, setColorMode] = useColorMode();

  useEffect(() => {
    setColorMode('dark');
  }, [setColorMode]);

  return <div>{children}</div>;
};

const themedRender: (
  ui: React.ReactElement,
  options?: RenderOptions
) => RenderResult = (ui, options?) =>
  render(ui, { wrapper: options?.wrapper || TestProvider, ...options });

export * from '@testing-library/react';
export { themedRender as render, DarkModeWrapper };
