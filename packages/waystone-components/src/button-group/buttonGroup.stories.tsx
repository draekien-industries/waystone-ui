import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ButtonGroup, ButtonGroupProps } from './buttonGroup';
import { Text } from '../text';

export default {
  title: 'Components/ButtonGroup',
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => (
  <ButtonGroup {...args} />
);

export const Default = Template.bind({});

Default.args = {
  buttons: [{ children: 'One' }, { children: 'Two' }],
} as ButtonGroupProps;

export const WithIcons = Template.bind({});

WithIcons.args = {
  buttons: [
    { children: 'Yes', icon: { name: 'check' } },
    { children: 'No', icon: { name: 'close' } },
  ],
} as ButtonGroupProps;

export const WithOnChangeCallback = () => {
  const [active, setActive] = React.useState<number>();

  return (
    <>
      <Text>{active ?? 'none'}</Text>
      <ButtonGroup
        buttons={[{ children: 'One' }, { children: 'Two' }]}
        onChange={(e) => setActive(e.index)}
      />
    </>
  );
};
