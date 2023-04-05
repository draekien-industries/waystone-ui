import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import {
  Spinner,
  SpinnerProps,
  withSpinner,
  CanLoad,
  WithSpinnerProps,
} from '@waystone/components/src';

interface ExampleComponentProps extends WithSpinnerProps {
  text: string;
}
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
