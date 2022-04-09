import React from 'react';
import { render } from '../common';
import { Spinner } from './spinner';

describe('The Spinner component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});
