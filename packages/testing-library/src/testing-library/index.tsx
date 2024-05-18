'use client';

import type { RenderOptions, RenderResult } from '@testing-library/react';
import { render } from '@testing-library/react';
import { Waystone } from '@waystone/theme-provider';
import type { PropsWithChildren } from 'react';
import type React from 'react';
import { useEffect } from 'react';
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
export * from '@testing-library/user-event';

export { DarkModeWrapper, themedRender as render };
