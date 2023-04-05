import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, waitFor, userEvent } from '@storybook/testing-library';
import { UseSpinnerContextDemo } from '@waystone/components/src/spinner/spinner.internal';
import { SpinnerProvider } from '@waystone/components/src/spinner/spinner.context';

export default {
  title: 'Hooks/useSpinnerContext',
  component: UseSpinnerContextDemo,
  args: {
    initialVisible: true,
  },
} as ComponentMeta<typeof UseSpinnerContextDemo>;

const Template: ComponentStory<typeof UseSpinnerContextDemo> = (args) => (
  <SpinnerProvider {...args}>
    <UseSpinnerContextDemo />
  </SpinnerProvider>
);

export const Default = Template.bind({});

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.click(canvas.getByText('Show'));

  await waitFor(() =>
    setTimeout(async () => {
      await userEvent.click(canvas.getByText('Hide'));
    }, 5000)
  );
};
