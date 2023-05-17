/** @jsxImportSource theme-ui */
import React from 'react';
import { ThemeUIStyleObject } from 'theme-ui';
import { useIsDarkMode } from '../hooks/useIsDarkMode';

export interface LabelProps {
  /** The ID of the HTML Element this label is associated with. */
  htmlFor?: string;
  /** The contents of the label */
  children: React.ReactNode;
}

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
