/** @jsxImportSource theme-ui */
import React, { useEffect } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import { useColorMode } from 'theme-ui';
import { Waystone } from '../waystone-ui/waystoneUi';

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

const themedRender: (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => RenderResult = (ui, options?) =>
  render(ui, { wrapper: TestProvider, ...options });

export * from '@testing-library/react';
export { themedRender as render, DarkModeWrapper };
