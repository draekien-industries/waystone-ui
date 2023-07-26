import React from 'react';
import { render } from '@waystone/testing-library';
import { Code } from './code';

describe('The Code component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Code>code</Code>);

    expect(container).toMatchSnapshot();
  });
});
