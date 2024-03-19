import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/test';
import { SpinnerProvider } from '@waystone/components/src/spinner/spinner.context';
import { UseSpinnerContextDemo } from '@waystone/components/src/spinner/spinner.internal';
import * as React from 'react';

const meta: Meta<typeof UseSpinnerContextDemo> = {
  title: 'Hooks/useSpinnerContext',
  component: UseSpinnerContextDemo,
  args: {
    initialVisible: true,
  },
};

export default meta;

const Template: StoryFn<typeof UseSpinnerContextDemo> = (args) => (
  <SpinnerProvider {...args}>
    <UseSpinnerContextDemo />
  </SpinnerProvider>
);

export const Default: StoryObj<typeof meta> = {
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
