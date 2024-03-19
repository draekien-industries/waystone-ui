import type { Meta, StoryFn, StoryObj } from '@storybook/react';
import type {
  CanLoad,
  SpinnerProps,
  WithSpinnerProps,
} from '@waystone/components/src';
import { Spinner, withSpinner } from '@waystone/components/src';
import type { FunctionComponent } from 'react';

type ExampleComponentProps = {
  text: string;
} & WithSpinnerProps;
const ExampleComponent = ({ text }: ExampleComponentProps) => <div>{text}</div>;

const ExampleComponentWithSpinner = withSpinner(ExampleComponent);

const meta: Meta<typeof ExampleComponentWithSpinner> = {
  title: 'HOC/withSpinner',
  component: ExampleComponentWithSpinner,
  subcomponents: { Spinner: Spinner as FunctionComponent<unknown> },
};

export default meta;

const Template: StoryFn<typeof ExampleComponentWithSpinner> = (args) => (
  <div
    id="content-container"
    style={{
      height: '10rem',
      width: '15rem',
      position: 'relative',
      border: '1px solid',
    }}
  >
    <ExampleComponentWithSpinner {...args} />
  </div>
);

export const Basic: StoryObj<typeof meta> = {
  render: Template,

  args: {
    text: 'lorem ipsum',
    loading: false,
    overlay: true,
  },
};
