import { render, screen } from '@waystone/testing-library';
import { Anchor } from '../anchor';

describe('<Anchor.Absolute />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <Anchor.Absolute
        href="https://example.com"
        referrerPolicy="no-referrer"
        target="">
        link
      </Anchor.Absolute>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with no decoration', () => {
    const { container } = render(
      <Anchor.Absolute
        href="https://example.com"
        referrerPolicy="no-referrer"
        target=""
        nodecoration>
        link
      </Anchor.Absolute>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render the external link icon', () => {
    render(
      <Anchor.Absolute
        href="https://example.com"
        referrerPolicy="no-referrer"
        target=""
        nodecoration>
        link
      </Anchor.Absolute>
    );

    const icon = screen.getByText('open_in_new');

    expect(icon).toBeInTheDocument();
  });
});
