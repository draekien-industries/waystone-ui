import { render } from '../__fixtures__';
import { Button } from './button';

describe('The Button component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Button>button</Button>);

    expect(container).toMatchSnapshot();
  });
});
