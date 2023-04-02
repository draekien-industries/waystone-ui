import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon, IconProps } from '@waystone/components/src';

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    variant: 'filled',
    size: 'md',
    color: 'inherit',
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});

Default.args = {
  name: 'accessibility',
} as IconProps;
