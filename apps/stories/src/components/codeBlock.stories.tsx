import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '@waystone/components/src';

const meta: Meta<typeof CodeBlock> = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: `console.log('Hello World!')`,
    styleName: 'tomorrowNightBlue',
  },
};

export const WithCaption: StoryObj<typeof meta> = {
  args: {
    language: 'typescript',
    children: `// my insightful comment
  const foo: string = 'bar';
  console.log(foo);`,
    caption: 'foo definitely is bar',
  },
};
