import type { Meta, StoryFn } from '@storybook/react';
import type {
  CanLoad,
  SpinnerProps,
  WithSpinnerProps,
} from '@waystone/components/src';
import { Spinner, withSpinner } from '@waystone/components/src';
import * as React from 'react';

type ExampleComponentProps = {
  text: string;
} & WithSpinnerProps;
const ExampleComponent = ({ text }: ExampleComponentProps) => <div>{text}</div>;

const ExampleComponentWithSpinner = withSpinner(ExampleComponent);

export default {
  title: 'HOC/withSpinner',
  component: ExampleComponentWithSpinner,
  subcomponents: { Spinner },
} as Meta<typeof ExampleComponentWithSpinner>;

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

export const Basic = {
  render: Template,

  args: {
    text: 'lorem ipsum',
    loading: false,
    overlay: true,
  } as ExampleComponentProps & CanLoad & SpinnerProps,
};
