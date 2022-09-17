import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CodeBlock } from './codeBlock';

export default {
  title: 'Components/CodeBlock',
  component: CodeBlock,
} as ComponentMeta<typeof CodeBlock>;

const Template: ComponentStory<typeof CodeBlock> = (args) => (
  <CodeBlock {...args} />
);

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
