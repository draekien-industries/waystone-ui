'use client';

import { DevTool } from '@hookform/devtools';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@waystone/button';
import { FormField } from '@waystone/form-fields';
import { useForm, type FieldValues, type SubmitHandler } from 'react-hook-form';

const meta: Meta<typeof FormField.RadioGroup> = {
  title: 'Components/FormFields/RadioGroup',
  component: FormField.RadioGroup,
  args: {
    options: [
      { id: 'one', label: 'Option 1', value: '1' },
      { id: 'one', label: 'Option 1', value: '2' },
    ],
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
        <FormField.RadioGroup
          id="radio-group-fields"
          {...register('radio-group')}
          options={[
            { id: 'one', label: 'Option 1', value: '1' },
            { id: 'one', label: 'Option 1', value: '2' },
          ]}
        />
        <Button type="button">submit</Button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export const HookForm: StoryObj<typeof meta> = {
  render: () => <WithHookForm onSubmit={(data) => console.table(data)} />,
};
