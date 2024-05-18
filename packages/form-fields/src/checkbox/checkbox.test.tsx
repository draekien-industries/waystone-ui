import {
  fireEvent,
  render,
  screen,
  userEvent,
} from '@waystone/testing-library';
import { Checkbox } from './checkbox';

describe('<Checkbox />', () => {
  it('should render a checkbox with no label', () => {
    const { container } = render(
      <Checkbox id="test" data-testid="test-checkbox" />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render a checkbox with a label', () => {
    const { container } = render(
      <Checkbox id="test" data-testid="test-checkbox" label="I am a checkbox" />
    );

    const label = screen.getByText('I am a checkbox');

    expect(label).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render an input with type checkbox', () => {
    render(<Checkbox id="testing" data-testid="test-checkbox" />);

    const checkbox = screen.getByTestId('test-checkbox');

    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

  it('should invoke change handler when clicked', async () => {
    const user = userEvent.setup({ delay: null });

    const handleChange = jest.fn();

    render(
      <Checkbox
        id="testing"
        data-testid="test-checkbox"
        onChange={handleChange}
      />
    );

    const checkbox = screen.getByTestId('test-checkbox');

    await user.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should invoke focus handler when focused', () => {
    const handleFocus = jest.fn();

    render(
      <Checkbox
        id="testing"
        data-testid="test-checkbox"
        onFocus={handleFocus}
      />
    );

    const checkbox = screen.getByTestId('test-checkbox');

    fireEvent.focus(checkbox);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it('should invoke blur handler when blurred', () => {
    const handleBlur = jest.fn();

    render(
      <Checkbox id="testing" data-testid="test-checkbox" onBlur={handleBlur} />
    );

    const checkbox = screen.getByTestId('test-checkbox');

    fireEvent.focus(checkbox);
    fireEvent.blur(checkbox);

    expect(handleBlur).toHaveBeenCalledTimes(1);
  });

  it('should invoke click handler when clicked', () => {
    const handleClick = jest.fn();

    render(
      <Checkbox
        id="testing"
        data-testid="test-checkbox"
        onClick={handleClick}
      />
    );

    const checkbox = screen.getByTestId('test-checkbox');

    fireEvent.click(checkbox);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
