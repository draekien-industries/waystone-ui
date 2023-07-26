import { render } from '@testing-library/react';
import { Waystone } from './Waystone';

describe('The Waystone component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Waystone>test</Waystone>);

    expect(container).toMatchSnapshot();
  });
});
