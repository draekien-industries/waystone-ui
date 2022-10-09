import { render } from '../__fixtures__';
import { Text } from './text';

describe('The Text component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Text>text</Text>);

    expect(container).toMatchSnapshot();
  });
});
