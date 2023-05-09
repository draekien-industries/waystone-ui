import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { CodeBlock } from '@waystone/components/src';

export default {
  title: 'Components/CodeBlock',
  component: CodeBlock,
} as Meta<typeof CodeBlock>;

export const Default = {
  args: {
    language: 'javascript',
    children: `console.log('Hello World!')`,
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
