import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/test';
import { Button } from '@waystone/components';
import {
  SpinnerProvider,
  useSpinnerContext,
} from '@waystone/components/src/spinner/spinner.context';

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
