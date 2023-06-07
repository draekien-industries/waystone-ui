/** @jsxImportSource theme-ui */
import { alpha } from '@theme-ui/color';
import { getOutlineCss } from '@waystone/core';
import React from 'react';
import { ThemeUIStyleObject } from 'theme-ui';
import {
  CanBeFullWidth,
  CanDisable,
  CanLoad,
  HasHeight,
  HasWidth,
} from '../common';
import { useIsDarkMode } from '../hooks/useIsDarkMode';
import { Spinner } from '../spinner';

/**
 * The props that can be passed to the CardButton component.
 */
export interface CardButtonProps
  extends HasWidth,
    HasHeight,
    CanDisable,
    CanLoad,
    CanBeFullWidth {
  /** A custom onClick handler that will be executed when the button is clicked. */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Should the card button render without any dropshadow. */
  noShadow?: boolean;
  /** The content to render inside the card button. */
  children: React.ReactNode;
}

/**
 * A button that shares the same styling as a card.
 * @param props - The props that can be passed to the CardButton component.
 * @param props.children - The content to render inside the card button.
 * @param props.onClick - A custom onClick handler that will be executed when the button is clicked.
 * @param props.noShadow - Should the card button render without any dropshadow.
 * @param props.width - The width of the card button.
 * @param props.minWidth - The minimum width of the card button.
 * @param props.maxWidth - The maximum width of the card button.
 * @param props.height - The height of the card button.
 * @param props.minHeight - The minimum height of the card button.
 * @param props.maxHeight - The maximum height of the card button.
 * @param props.disabled - Should the card button be disabled.
 * @param props.loading - Should the card button be loading.
 * @param props.fullWidth - Should the card button be full width.
 * @returns The rendered card button.
 */
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
  const darkMode = useIsDarkMode();
  const outline = getOutlineCss();

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
    backgroundColor: darkMode ? 'b-600' : 'b-50',
    boxShadow: !noShadow && 'md',
    cursor: 'pointer',
    overflow: 'hidden',
    textAlign: 'left',
    transition: 'all 200ms',
    ...outline.base,
    ...outline.focused,
    ...rest,
    ':enabled:hover': {
      backgroundColor: darkMode ? 'b-500' : 'b-100',
    },
    ':enabled:active': {
      backgroundColor: darkMode ? 'b-400' : 'b-200',
      ...outline.active[':enabled:active'],
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
