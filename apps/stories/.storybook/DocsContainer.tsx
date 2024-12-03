import {
  DocsContainer as BaseContainer,
  DocsContainerProps,
} from '@storybook/addon-docs';
import { themes } from '@storybook/theming';
import { PropsWithChildren } from 'react';

export const DocsContainer = ({
  children,
  ...rest
}: PropsWithChildren<DocsContainerProps>) => {
  return (
    <BaseContainer {...rest} theme={themes.light}>
      {children}
    </BaseContainer>
  );
};
