import { render } from '@waystone/testing-library';
import { Spinner } from './spinner';

describe('The Spinner component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Spinner />);

    expect(container).toMatchSnapshot();
  });
});
