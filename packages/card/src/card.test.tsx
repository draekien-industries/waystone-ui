import { render, screen } from '@waystone/testing-library';
import { Card } from './card';

describe('<Card />', () => {
  it('renders a blank card', () => {
    render(<Card data-testid="test-card" />);

    const card = screen.getByTestId('test-card');

    expect(card).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Card>lorem ipsum</Card>);

    const card = screen.getByText('lorem ipsum');

    expect(card).toBeInTheDocument();
  });

  it('renders a background image', () => {
    const { container } = render(<Card image={{ src: '/testimage.jpg' }} />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
    const backgroundImage = container.querySelector(
      'div[aria-description="A decorative background image"]'
    );

    expect(backgroundImage).toBeInTheDocument();
  });

  it('renders an image component', () => {
    render(
      <Card
        image={
          <img src="/testimage.jpg" alt="test" data-testid="image-component" />
        }
      />
    );

    const image = screen.getByTestId('image-component');

    expect(image).toBeInTheDocument();
  });
});
