/** @jsxImportSource theme-ui */
import { PropsWithChildren } from 'react';
import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from '@storybook/blocks';
import { useDarkMode } from 'storybook-dark-mode';
import { themes } from '@storybook/theming';
import { parameters } from './preview';

export const DocsContainer = ({
  children,
  ...rest
}: PropsWithChildren<DocsContainerProps>) => {
  const dark = useDarkMode();

  return (
    <BaseContainer {...rest} theme={dark ? themes.dark : themes.light}>
      {children}
    </BaseContainer>
  );
};
