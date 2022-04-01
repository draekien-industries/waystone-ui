/** @jsxImportSource theme-ui */
import { ReactNode } from 'react';
import { codeCss } from './code.styles';

/** The props required to render the code component. */
export interface CodeProps {
  /** The code to render. */
  children: ReactNode;
}

/**
 * An inline code snippet.
 */
export function Code({ children }: CodeProps) {
  return <code sx={codeCss}>{children}</code>;
}
