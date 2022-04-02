import React from 'react';
import { render } from '../common';
import { Anchor } from './anchor';

describe('The Anchor component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Anchor href="#">anchor</Anchor>);

    expect(container).toMatchSnapshot();
  });
});
