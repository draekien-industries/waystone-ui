import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { InputContainer, InputContainerProps } from './inputContainer';

export default {
  title: 'Components/InputContainer',
  component: InputContainer,
} as ComponentMeta<typeof InputContainer>;

const Template: ComponentStory<typeof InputContainer> = (args) => (
  <InputContainer {...args} />
);

export const Default = Template.bind({});

Default.args = {
  id: 'example-input',
  label: 'Example input',
  children: <input id="example-input" />,
  helpText: 'Some very helpful text explaining what the input is for',
} as InputContainerProps;

export const Required = Template.bind({});

Required.args = {
  id: 'example-input',
  label: 'Example input',
  children: <input id="example-input" />,
  helpText: 'Some very helpful text explaining what the input is for',
  required: true,
} as InputContainerProps;

export const WithWidthConstraint = Template.bind({});

WithWidthConstraint.args = {
  id: 'example-input',
  label: 'Example input',
  children: <input id="example-input" />,
  helpText: 'Some very helpful text explaining what the input is for',
  width: 'xl',
} as InputContainerProps;
