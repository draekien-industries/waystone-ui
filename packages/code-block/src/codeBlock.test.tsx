import { render, screen } from '@waystone/testing-library';
import { CodeBlock } from './codeBlock';

describe('<CodeBlock />', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <CodeBlock code="console.log('Hello World');" language="javascript" />
    );

    expect(container).toMatchSnapshot();
  });

  it('should render a footer', () => {
    const { container } = render(
      <CodeBlock code="test" footer="example footer" />
    );

    const footer = screen.getByText('example footer');

    expect(footer).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('accepts a testid', () => {
    render(<CodeBlock code="test" data-testid="code-block" />);

    const codeBlock = screen.getByTestId('code-block');

    expect(codeBlock).toBeInTheDocument();
  });
});
