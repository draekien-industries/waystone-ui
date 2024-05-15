import { render, screen } from '@waystone/testing-library';
import { Button } from '../button';

describe('<Button />', () => {
  it('can be disabled', () => {
    render(
      <Button disabled data-testid="test-button">
        test
      </Button>
    );

    const button = screen.getByTestId('test-button');

    expect(button).toBeDisabled();
  });

  it('is disabled when loading', () => {
    render(
      <Button loading data-testid="test-button">
        test
      </Button>
    );

    const button = screen.getByTestId('test-button');

    expect(button).toBeDisabled();
  });

  it('renders an icon when provided', () => {
    render(
      <Button icon={{ name: 'expand_more' }} data-testid="test-button">
        test
      </Button>
    );

    const icon = screen.getByText('expand_more');

    expect(icon).toBeInTheDocument();
  });

  it('renders a spinner when loading', () => {
    const { container } = render(<Button loading />);

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const spinner = container.querySelector(
      'div[aria-description="Loading..."]'
    );

    expect(spinner).toBeInTheDocument();
  });
});
