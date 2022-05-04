import React from 'react';
import { render } from '../common';
import { Card } from './card';

describe('The Card component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Card>card</Card>);

    expect(container).toMatchSnapshot();
  });
});
