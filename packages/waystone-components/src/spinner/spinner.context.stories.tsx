import React from 'react';
import { Meta, Story } from '@storybook/react';
import { within, waitFor, userEvent } from '@storybook/testing-library';
import { UseSpinnerContextDemo } from './spinner.internal';
import { SpinnerProvider, SpinnerProviderProps } from './spinner.context';

export default {
  title: 'Hooks/useSpinnerContext',
  component: UseSpinnerContextDemo,
  args: {
    initialVisible: true,
  },
} as Meta;

const Template: Story<SpinnerProviderProps> = (args) => (
  <SpinnerProvider {...args}>
    <UseSpinnerContextDemo />
  </SpinnerProvider>
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await waitFor(() =>
    setTimeout(async () => {
      await userEvent.click(canvas.getByText('Hide'));
    }, 5000)
  );
};
