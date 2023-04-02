import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Spinner,
  SpinnerProps,
  withSpinner,
  CanLoad,
} from '@waystone/components/src';

interface ExampleComponentProps {
  text: string;
}
const ExampleComponent = ({ text }: ExampleComponentProps) => <div>{text}</div>;

const ExampleComponentWithSpinner = withSpinner(ExampleComponent);

export default {
  title: 'HOC/withSpinner',
  component: ExampleComponentWithSpinner,
  subcomponents: { Spinner },
} as ComponentMeta<typeof ExampleComponentWithSpinner>;

const Template: ComponentStory<typeof ExampleComponentWithSpinner> = (args) => (
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

export const Basic = Template.bind({});

Basic.args = {
  text: 'lorem ipsum',
  loading: false,
  overlay: true,
} as ExampleComponentProps & CanLoad & SpinnerProps;
