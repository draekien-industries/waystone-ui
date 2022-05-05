/** @jsxImportSource theme-ui */
import { alpha } from '@theme-ui/color';
import React from 'react';
import { ThemeUIStyleObject, useColorMode } from 'theme-ui';
import { CardProps } from '../card/card';
import { CanDisable, CanLoad } from '../common';
import { Spinner } from '../spinner/spinner';

export interface CardButtonProps extends CardProps, CanDisable, CanLoad {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLButtonElement>) => void;
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
  onKeyDown,
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
    overflowY: 'auto',
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
      onKeyDown={onKeyDown}
      type="button"
      disabled={disabled || loading}
    >
      {loading && <Spinner overlay />}
      {children}
    </button>
  );
};
