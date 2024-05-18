import type { PropsWithChildren } from 'react';
import { codeCss } from './code.styles';

export const Code = ({ children }: PropsWithChildren) => (
  <code sx={codeCss}>{children}</code>
);
