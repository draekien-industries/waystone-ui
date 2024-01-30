import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from '@storybook/addon-docs';
import { themes } from '@storybook/theming';
import { PropsWithChildren, useMemo } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

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
