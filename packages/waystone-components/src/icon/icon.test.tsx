import React from 'react';
import { render } from '../common';
import { Icon } from './icon';

describe('The Icon component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Icon name="accessibility" />);

    expect(container).toMatchSnapshot();
  });
});
