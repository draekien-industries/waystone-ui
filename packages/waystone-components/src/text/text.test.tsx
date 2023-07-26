import { render } from '@waystone/testing-library';
import { Text } from './text';

describe('The Text component', () => {
  it('Matches snapshot', () => {
    const { container } = render(<Text>text</Text>);

    expect(container).toMatchSnapshot();
  });
});
