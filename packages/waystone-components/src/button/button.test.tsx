import React from 'react';
import { render } from '../common';
import { Button } from './button';

describe('The Button component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Button>button</Button>);

    expect(container).toMatchSnapshot();
  });
});
