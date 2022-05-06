import React from 'react';
import { Meta, Story } from '@storybook/react';
import { CodeBlock, CodeBlockProps } from './codeBlock';

export default {
  title: 'Components/CodeBlock',
  component: CodeBlock,
} as Meta;

const Template: Story<CodeBlockProps> = (args) => <CodeBlock {...args} />;

export const Default = Template.bind({});

Default.args = {
  language: 'javascript',
  children: `console.log('Hello World!')`,
};

export const WithCaption = Template.bind({});

WithCaption.args = {
  language: 'typescript',
  children: `// my insightful comment
const foo: string = 'bar';
console.log(foo);`,
  caption: 'foo definitely is bar',
};
