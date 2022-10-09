import { render } from '../__fixtures__';
import { Icon } from './icon';

describe('The Icon component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Icon name="accessibility" />);

    expect(container).toMatchSnapshot();
  });
});
