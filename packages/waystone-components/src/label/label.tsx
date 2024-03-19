'use client';

import type { ReactNode } from 'react';
import type { ThemeUIStyleObject } from 'theme-ui';
import { useIsDarkMode } from '../hooks/useIsDarkMode';

export type LabelProps = {
  /** The ID of the HTML Element this label is associated with. */
  htmlFor?: string;
  /** The contents of the label */
  children: ReactNode;
};

export const Label = ({ htmlFor, children }: LabelProps) => {
  const darkMode = useIsDarkMode();

  const labelCss: ThemeUIStyleObject = {
    textTransform: 'capitalize',
    color: darkMode ? 'b-300' : 'b-500',
    fontWeight: 'medium',
    fontSize: 'caption',
    letterSpacing: '0.1em',
  };

  return (
    <label sx={labelCss} htmlFor={htmlFor}>
      {children}
    </label>
  );
};
