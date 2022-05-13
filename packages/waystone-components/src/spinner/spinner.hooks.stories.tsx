import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useSpinner } from './spinner.hooks';
import { UseSpinnerDemo } from './spinner.internal';
import { Button } from '../button/button';

export default {
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
} as ComponentMeta<typeof UseSpinnerDemo>;

const Template: ComponentStory<typeof UseSpinnerDemo> = (args) => (
  <UseSpinnerDemo {...args} />
);

export const Default = Template.bind({});

export const InitialVisible = Template.bind({});

InitialVisible.args = {
  initialVisible: true,
  overlay: true,
};

export const Relative = () => {
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

export const NoOverlay = Template.bind({});

NoOverlay.args = {
  initialVisible: true,
  overlay: false,
};
