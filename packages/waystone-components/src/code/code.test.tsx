import React from 'react';
import { render } from '../__fixtures__';
import { Code } from './code';

describe('The Code component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Code>code</Code>);

    expect(container).toMatchSnapshot();
  });
});
