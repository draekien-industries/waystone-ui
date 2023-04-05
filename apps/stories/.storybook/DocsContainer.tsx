/** @jsxImportSource theme-ui */
import { PropsWithChildren, useMemo, useState } from 'react';
import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from '@storybook/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';

export const DocsContainer = ({
  children,
  ...rest
}: PropsWithChildren<DocsContainerProps>) => {
  const dark = useDarkMode();

  const theme = useMemo(() => {
    return dark ? themes.dark : themes.light;
  }, [dark]);

  return (
    <BaseContainer {...rest} theme={theme}>
      {children}
    </BaseContainer>
  );
};
