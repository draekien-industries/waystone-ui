import React from 'react';
import { render } from '@testing-library/react';
import { Waystone } from './waystoneUi';

describe('The Waystone component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Waystone>test</Waystone>);

    expect(container).toMatchSnapshot();
  });
});
