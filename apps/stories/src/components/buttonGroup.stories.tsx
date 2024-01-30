'use client';

import { Meta } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps, Text } from '@waystone/components/src';
import * as React from 'react';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} as Meta<typeof ButtonGroup>;

export const Default = {
  args: {
    buttons: [
      { id: 'one', children: 'One' },
      { id: 'two', children: 'Two' },
    ],
  } as ButtonGroupProps,
};

export const WithIcons = {
  args: {
    buttons: [
      { id: 'yes', children: 'Yes', icon: { name: 'check' } },
      { id: 'no', children: 'No', icon: { name: 'close' } },
    ],
  } as ButtonGroupProps,
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
