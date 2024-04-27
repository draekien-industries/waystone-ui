'use client';

import { DevTool } from '@hookform/devtools';
import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@waystone/button';
import { FormField } from '@waystone/form-fields';
import { useForm } from 'react-hook-form';

const meta: Meta<typeof FormField> = {
  title: 'Components/FormFields/FormField',
  component: FormField,
};

export default meta;

const ExampleForm = () => {
  const { control, register, handleSubmit } = useForm();

  return (
    <>
      <form onSubmit={handleSubmit(action('submit'))}>
        <FormField.Label htmlFor="lorem">Lorem</FormField.Label>
        <FormField.Input id="lorem" {...register('lorem')} />
        <FormField.Checkbox
          id="ipsum"
          label="lorem ipsum"
          fullWidth
          {...register('ipsum')}
        />
        <Button sx={{ marginTop: 'medium' }} type="submit">
          Submit
        </Button>
      </form>
      <DevTool control={control} />
    </>
  );
};

export const Example: StoryObj<typeof FormField> = {
  args: {},
  render: ExampleForm,
};
