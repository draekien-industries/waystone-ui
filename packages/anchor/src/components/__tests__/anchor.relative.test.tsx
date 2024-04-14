import { render } from '@waystone/testing-library';
import { Anchor } from '../anchor';

describe('<Anchor.Relative />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Anchor.Relative href="/bob">link</Anchor.Relative>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with no decoration', () => {
    const { container } = render(
      <Anchor.Relative href="#" nodecoration>
        link
      </Anchor.Relative>
    );

    expect(container).toMatchSnapshot();
  });
});
