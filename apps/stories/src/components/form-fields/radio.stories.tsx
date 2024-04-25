'use client';

import { DevTool } from '@hookform/devtools';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@waystone/button';
import { FormField } from '@waystone/form-fields';
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';

const meta: Meta<typeof FormField.Radio> = {
  title: 'Components/FormFields/Radio',
  component: FormField.Radio,
  args: {
    id: 'one',
    label: 'Option 1',
    value: '1',
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {};

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
          <FormField.Radio
            key={option.id}
            {...option}
            {...register('radio-group')}
          />
        ))}
        <Button type="submit">submit</Button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export const HookForm: StoryObj<typeof meta> = {
  render: () => <WithHookForm onSubmit={(data) => console.table(data)} />,
};
