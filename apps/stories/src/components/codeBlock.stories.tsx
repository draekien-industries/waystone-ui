import type { Meta } from '@storybook/react';
import { CodeBlock } from '@waystone/components/src';

export default {
  title: 'Components/CodeBlock',
  component: CodeBlock,
} as Meta<typeof CodeBlock>;

export const Default = {
  args: {
    children: `console.log('Hello World!')`,
    styleName: 'tomorrowNightBlue',
  },
};

export const WithCaption = {
  args: {
    language: 'typescript',
    children: `// my insightful comment
  const foo: string = 'bar';
  console.log(foo);`,
    caption: 'foo definitely is bar',
  },
};
