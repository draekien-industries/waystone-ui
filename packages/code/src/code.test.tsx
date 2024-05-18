import { render } from '@waystone/testing-library';
import { codeCss } from './code.styles';
import { Code } from './code';

describe('codeCss', () => {
  it('should match snapshot', () => {
    expect(codeCss).toMatchSnapshot();
  });
});

describe('<Code />', () => {
  it('should match snapshot', () => {
    const { container } = render(<Code>{`console.log('Hello World')`}</Code>);

    expect(container).toMatchSnapshot();
  });
});
