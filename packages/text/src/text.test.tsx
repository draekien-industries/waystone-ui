import { render } from '@waystone/testing-library';
import { textVariants, Text } from './text';

describe('<Text />', () => {
  describe.each(textVariants)('variant %s', (variant) => {
    it('should match snapshot', () => {
      const { container } = render(<Text variant={variant}>Lorem Ipsum</Text>);

      expect(container).toMatchSnapshot();
    });
  });
});
