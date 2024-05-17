import { render } from '@waystone/testing-library';
import { Label } from './label';

describe('<Label />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Label htmlFor="test-input">Test Label</Label>
    );

    expect(container).toMatchSnapshot();
  });
});
