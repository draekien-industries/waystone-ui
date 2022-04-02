import React from 'react';
import { render } from '../common';
import { Text } from './text';

describe('The Text component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Text>text</Text>);

    expect(container).toMatchSnapshot();
  });
});
