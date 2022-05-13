import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from './button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    disabled: false,
    noPadding: false,
    noShadow: false,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={action('clicked')} />
);

export const Default = Template.bind({});

export const WithDisabled = Template.bind({});

WithDisabled.parameters = {
  docs: {
    description: {
      story:
        "Setting the `disabled` prop to `true` will disable the button. This is useful if you don't want a user to click on the button, or if you want to disable it while something is loading.",
    },
  },
};

WithDisabled.args = {
  disabled: true,
};

export const WithNoPadding = Template.bind({});

WithNoPadding.parameters = {
  docs: {
    description: {
      story:
        'Setting the `noPadding` prop to `true` will remove all padding inside the button. This is useful if you want to set the padding directly onto the children of the button.',
    },
  },
};

WithNoPadding.args = {
  noPadding: true,
};

export const WithNoShadow = Template.bind({});

WithNoShadow.parameters = {
  docs: {
    description: {
      story:
        'Setting the `noShadow` prop to `true` will remove all shadows from the button. Use this if you want the button to appear flat instead of raised.',
    },
  },
};

WithNoShadow.args = {
  noShadow: true,
};

export const WithCustomWidth = Template.bind({});

WithCustomWidth.parameters = {
  docs: {
    description: {
      story:
        'Use the `width`, `minWidth`, and `maxWidth` props to assign custom widths to the button.',
    },
  },
};

WithCustomWidth.args = {
  width: '20%',
  minWidth: '5rem',
  maxWidth: '20rem',
};
