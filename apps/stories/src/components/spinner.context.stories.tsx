import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { within, waitFor, userEvent } from '@storybook/testing-library';
import { UseSpinnerContextDemo } from '@waystone/components/src/spinner/spinner.internal';
import { SpinnerProvider } from '@waystone/components/src/spinner/spinner.context';

export default {
  title: 'Hooks/useSpinnerContext',
  component: UseSpinnerContextDemo,
  args: {
    initialVisible: true,
  },
} as Meta<typeof UseSpinnerContextDemo>;

const Template: StoryFn<typeof UseSpinnerContextDemo> = (args) => (
  <SpinnerProvider {...args}>
    <UseSpinnerContextDemo />
  </SpinnerProvider>
);

export const Default = {
  render: Template,

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByText('Show'));

    await waitFor(() =>
      setTimeout(async () => {
        await userEvent.click(canvas.getByText('Hide'));
      }, 5000)
    );
  },
};
