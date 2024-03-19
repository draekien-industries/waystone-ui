import type { Meta } from '@storybook/react';
import type { IconProps } from '@waystone/components/src';
import { Icon } from '@waystone/components/src';

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    variant: 'filled',
    size: 'md',
    color: 'inherit',
  },
} as Meta<typeof Icon>;

export const Default = {
  args: {
    name: 'accessibility',
  } as IconProps,
};
