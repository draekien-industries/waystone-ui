/** @jsxImportSource theme-ui */
import { alpha } from '@theme-ui/color';
import React from 'react';
import { ThemeUIStyleObject, useColorMode } from 'theme-ui';
import {
  CanBeFullWidth,
  CanDisable,
  CanLoad,
  HasHeight,
  HasWidth,
} from '../common';
import { Spinner } from '../spinner/spinner';

export interface CardButtonProps
  extends HasWidth,
    HasHeight,
    CanDisable,
    CanLoad,
    CanBeFullWidth {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  noShadow?: boolean;
  children: React.ReactNode;
}

export const CardButton = ({
  children,
  fullWidth,
  width,
  minWidth,
  maxWidth,
  noShadow,
  disabled,
  loading,
  onClick,
  ...rest
}: CardButtonProps) => {
  const [mode] = useColorMode();
  const darkMode = mode === 'dark';

  const cardCss: ThemeUIStyleObject = {
    position: 'relative',
    paddingX: 'md',
    paddingY: 'md',
    border: 'none',
    borderRadius: 'md',
    color: 'text',
    width: fullWidth ? '100%' : width || 'auto',
    minWidth: !fullWidth && minWidth,
    maxWidth: !fullWidth && maxWidth,
    backgroundColor: darkMode ? 'b-600' : 'b-000',
    boxShadow: !noShadow && 'md',
    cursor: 'pointer',
    outlineColor: alpha('info-000', 0.75),
    outlineWidth: 0,
    outlineStyle: 'solid',
    overflow: 'hidden',
    textAlign: 'left',
    transition: 'all 200ms',
    ...rest,
    ':enabled:hover, :enabled:focus': {
      backgroundColor: darkMode ? 'b-500' : 'b-100',
      outlineColor: alpha('info-000', 0.75),
      outlineWidth: 'sm',
      outlineStyle: 'solid',
    },
    ':enabled:active': {
      backgroundColor: darkMode ? 'b-400' : 'b-200',
    },
    ':disabled': {
      color: 'b-400',
      backgroundColor: 'muted',
      cursor: 'not-allowed',
    },
  };

  return (
    <button
      sx={cardCss}
      onClick={onClick}
      type="button"
      disabled={disabled || loading}
    >
      {loading && <Spinner overlay />}
      {children}
    </button>
  );
};
