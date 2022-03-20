/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Waystone } from '../';
import { useColorMode } from '@theme-ui/color-modes';

const TestProvider: React.FC = ({ children }) => (
  <Waystone>{children}</Waystone>
);

const DarkModeWrapper: React.FC = ({ children }) => {
  const [, setColorMode] = useColorMode();

  useEffect(() => {
    setColorMode('dark');
  }, [setColorMode]);

  return <div>{children}</div>;
};

const themedRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: TestProvider, ...options });

export * from '@testing-library/react';
export { themedRender as render, DarkModeWrapper };
