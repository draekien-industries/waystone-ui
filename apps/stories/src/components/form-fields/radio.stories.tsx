'use client';

import { DevTool } from '@hookform/devtools';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@waystone/button';
import { Radio } from '@waystone/form-fields';
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';
import { action } from '@storybook/addon-actions';
import { fn } from '@storybook/test';

const meta: Meta<typeof Radio> = {
  title: 'Components/FormFields/Radio',
  component: Radio,
  args: {
    id: 'one',
    label: 'Option 1',
    value: '1',
    onClick: fn(),
    onBlur: fn(),
    onChange: fn(),
    onFocus: fn(),
  },
};

export default meta;

export const Uncontrolled: StoryObj<typeof meta> = {};

export const Controlled: StoryObj<typeof meta> = {
  args: {
    checked: false,
  },
  render: (args) => <Radio {...args} checked={args.checked ?? false} />,
};

const WithHookForm = ({
  onSubmit,
}: {
  onSubmit: SubmitHandler<FieldValues>;
}) => {
  const { control, register, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {[
          { id: 'one', label: 'Option 1', value: '1' },
          { id: 'two', label: 'Option 2', value: '2' },
        ].map((option) => (
          <Radio key={option.id} {...option} {...register('radio-group')} />
        ))}
        <Button type="submit">submit</Button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export const HookForm: StoryObj<typeof meta> = {
  render: () => <WithHookForm onSubmit={action('submit')} />,
};
