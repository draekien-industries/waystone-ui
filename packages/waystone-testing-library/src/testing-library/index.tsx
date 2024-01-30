import { RenderOptions, RenderResult, render } from '@testing-library/react';
import { Waystone } from '@waystone/theme';
import React, { PropsWithChildren, useEffect } from 'react';
import { useColorMode } from 'theme-ui';

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
export { DarkModeWrapper, themedRender as render };
