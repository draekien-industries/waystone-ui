import { render, screen } from '../__fixtures__';
import { Button } from './button';

describe('The Button component', () => {
  it('matches snapshot', () => {
    const { container } = render(<Button>button</Button>);

    expect(container).toMatchSnapshot();
  });

  it('renders a spinner when loading', () => {
    render(<Button loading>button</Button>);

    const spinner = screen.getByRole('progressbar');

    expect(spinner).toBeInTheDocument();
  });

  it('renders an icon when iconProps are provided', () => {
    render(<Button icon={{ name: 'access_alarm' }}>button</Button>);

    const icon = screen.getByText('access_alarm');

    expect(icon).toBeInTheDocument();
  });

  it('should be disabled when the disabled prop is true', () => {
    render(<Button disabled>Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should be disabled when the loading prop is true', () => {
    render(<Button loading>Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toBeDisabled();
  });

  it('should use the provided widths', () => {
    render(
      <Button width="50%" minWidth="2rem" maxWidth="4rem">
        Button
      </Button>
    );

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      width: '50%',
      'min-width': '2rem',
      'max-width': '4rem',
    });
  });

  it('should have 100% width when fullWidth prop is true', () => {
    render(<Button fullWidth>Button</Button>);

    const button = screen.getByRole('button');

    expect(button).toHaveStyle({
      width: '100%',
    });
  });

  it('renders a medium spinner when size is `md`', () => {
    render(
      <Button size="md" loading>
        button
      </Button>
    );

    const spinner = screen.getByRole('progressbar');

    expect(spinner).toHaveStyle({ height: '1.5em' });
  });
});
