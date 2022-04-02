import React from 'react';
import { render } from '../common';
import { CodeBlock } from './codeBlock';

describe('The code block component', () => {
  it('Should match snapshot', () => {
    const { container } = render(
      <CodeBlock language="javascript">
        console.Log(&quot;Hello World&quot;)
      </CodeBlock>
    );

    expect(container).toMatchSnapshot();
  });
});
