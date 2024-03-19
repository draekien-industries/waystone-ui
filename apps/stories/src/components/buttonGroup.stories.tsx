'use client';

import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonGroup, Text } from '@waystone/components/src';
import * as React from 'react';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
  subcomponents: {
    Button: Button as React.FunctionComponent<unknown>,
  },
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    buttons: [
      { id: 'one', children: 'One' },
      { id: 'two', children: 'Two' },
    ],
  },
};

export const WithIcons: StoryObj<typeof meta> = {
  args: {
    buttons: [
      { id: 'yes', children: 'Yes', icon: { name: 'check' } },
      { id: 'no', children: 'No', icon: { name: 'close' } },
    ],
  },
};

export const WithOnChangeCallback = () => {
  const [active, setActive] = React.useState<string>();

  return (
    <>
      <Text>{active ?? 'none'}</Text>
      <ButtonGroup
        buttons={[
          { id: 'buttonOne', children: 'One' },
          { id: 'buttonTwo', children: 'Two' },
        ]}
        activeButton={active}
        onChange={(e) => setActive(e.clicked)}
      />
    </>
  );
};
