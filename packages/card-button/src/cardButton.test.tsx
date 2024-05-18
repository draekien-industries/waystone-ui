import { render, screen } from '@waystone/testing-library';
import { CardButton } from './cardButton';

describe('<CardButton />', () => {
  it('renders without children', () => {
    const { container } = render(<CardButton />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders children', () => {
    const { container } = render(<CardButton>Card Content</CardButton>);

    const button = screen.getByText('Card Content');

    expect(button).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('renders as disabled', () => {
    render(<CardButton disabled />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('is diabled when loading', () => {
    render(<CardButton loading />);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('renders a spinner when loading', () => {
    const { container } = render(<CardButton loading />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const spinner = container.querySelector(
      'div[aria-description="Loading..."]'
    );

    expect(spinner).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
