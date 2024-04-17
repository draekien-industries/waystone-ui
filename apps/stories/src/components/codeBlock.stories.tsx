import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '@waystone/code-block';

const meta: Meta<typeof CodeBlock> = {
  title: 'Components/CodeBlock',
  component: CodeBlock,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    code: `console.log('Hello World!')`,
    styleName: 'tomorrowNightBlue',
  },
};

export const WithFooter: StoryObj<typeof meta> = {
  args: {
    language: 'typescript',
    code: `// my insightful comment
const foo: string = 'bar';
console.log(foo);`,
    footer: 'foo definitely is bar',
  },
};

export const WithFooterComponent: StoryObj<typeof meta> = {
  args: {
    ...WithFooter.args,
    styleName: 'tomorrowNightBlue',
    footer: (
      <small style={{ color: 'white' }}>
        any footer component can be added in case you need to apply custom
        styles
      </small>
    ),
  },
};
