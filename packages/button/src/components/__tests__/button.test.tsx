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
});
