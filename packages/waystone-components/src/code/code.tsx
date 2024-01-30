'use client';

import { ReactNode } from 'react';
import { useColorMode } from 'theme-ui';
import { codeCss } from './code.styles';

/** The props required to render the code component. */
export interface CodeProps {
  /** The code to render. */
  children: ReactNode;
}

/**
 * An inline code snippet.
 */
export const Code = ({ children }: CodeProps) => {
  const [mode] = useColorMode();

  return <code sx={codeCss(mode === 'dark')}>{children}</code>;
};
