'use client';

import React from 'react';
import { Button } from '../button/button';
import { useSpinnerContext } from './spinner.context';
import { useSpinner, UseSpinnerProps } from './spinner.hooks';

/**
 * A hook that manages the visibility of a spinner. Allows for the
 * spinner to be shown and hidden programmatically. You must
 * position the returned `spinner` element within the DOM.
 *
 * The recommended usage of this hook is for components that may require
 * showing a spinner for a short period of time and where the spinner needs
 * to be constrained to a parent container that has `position: relative`.
 *
 * While it is possible to use this hook to render a full screen spinner,
 * it is recommended to use the `useSpinnerContext` hook instead.
 */
export const UseSpinnerDemo: React.FC<UseSpinnerProps> = ({
  initialVisible = false,
  overlay = true,
}) => {
  const { show, hide, spinner } = useSpinner({ initialVisible, overlay });

  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        gap: '1rem',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '10rem',
          height: '5rem',
          backgroundColor: 'lightblue',
        }}
      >
        {spinner}
      </div>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Button onClick={show}>Show</Button>
        <Button onClick={hide}>Hide</Button>
      </div>
    </div>
  );
};

/**
 * A hook that manages the visibility of the spinner provided by the `SpinnerProvider`.
 * This spinner will always take up the full screen, and defaults to initially being visible.
 * The recommended usage of this hook is for pages that require a spinner to be shown while
 * data is being fetched.
 */
export const UseSpinnerContextDemo: React.FC = () => {
  const { show, hide } = useSpinnerContext();

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Button onClick={show}>Show</Button>
      <Button onClick={hide}>Hide</Button>
    </div>
  );
};
