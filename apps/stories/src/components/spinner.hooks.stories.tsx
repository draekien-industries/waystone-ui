'use client';

import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { Button, useSpinner } from '@waystone/components/src';
import { UseSpinnerDemo } from '@waystone/components/src/spinner/spinner.internal';
import * as React from 'react';

const meta: Meta<typeof UseSpinnerDemo> = {
  title: 'Hooks/useSpinner',
  component: UseSpinnerDemo,
  args: {
    initialVisible: false,
    overlay: true,
  },
  argTypes: {
    initialVisible: {
      description:
        'Whether the spinner should be visible initially. Defaults to `false`',
    },
    overlay: {
      description:
        'Whether the spinner should cover the full screen. Defaults to `true`. Use `position:relative` on the parent container to restrict the spinner to the parent container.',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};

export const InitialVisible: StoryObj<typeof meta> = {
  args: {
    initialVisible: true,
    overlay: true,
  },
};

export const Relative: StoryFn<typeof meta> = () => {
  const { show, hide, spinner } = useSpinner({ initialVisible: true });

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
          position: 'relative',
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

export const NoOverlay: StoryObj<typeof meta> = {
  args: {
    initialVisible: true,
    overlay: false,
  },
};
