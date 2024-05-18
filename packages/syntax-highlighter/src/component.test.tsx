import { render } from '@waystone/testing-library';
import { SyntaxHighlighter } from './component';

describe('Components: SyntaxHighlighter', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <SyntaxHighlighter language="javascript">
        console.log(&quot;Hello World&quot;)
      </SyntaxHighlighter>
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when wrapLines is true', () => {
    const { container } = render(
      <SyntaxHighlighter language="javascript" wrapLines>
        console.log(&quot;Hello World&quot;)
      </SyntaxHighlighter>
    );

    expect(container).toMatchSnapshot();
  });

  it('should match snapshot when styleName is not defaultStyle', () => {
    const { container } = render(
      <SyntaxHighlighter language="javascript" styleName="a11yDark">
        console.log(&quot;Hello World&quot;)
      </SyntaxHighlighter>
    );

    expect(container).toMatchSnapshot();
  });
});
