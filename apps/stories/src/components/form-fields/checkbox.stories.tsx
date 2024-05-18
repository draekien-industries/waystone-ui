import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '@waystone/form-fields';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/FormFields/Checkbox',
  component: Checkbox,
  args: {
    id: 'checkbox-example',
    label: 'I am a checkbox',
    disabled: false,
  },
  argTypes: {
    onChange: {
      action: 'changed',
    },
    onClick: {
      action: 'clicked',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};

export const Controlled: StoryObj<typeof meta> = {
  args: {
    checked: false,
  },
};

export const DefaultChecked: StoryObj<typeof meta> = {
  args: {
    checked: undefined,
    defaultChecked: true,
  },
};
