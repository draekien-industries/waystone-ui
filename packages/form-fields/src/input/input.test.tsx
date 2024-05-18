import { render } from '@waystone/testing-library';
import { Input } from './input';
import { inputCss } from './input.styles';

describe('<Input />', () => {
  describe('component', () => {
    it('should match snapshot', () => {
      const { container } = render(<Input id="test-input" />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('css', () => {
    it('should match snapshot', () => {
      const css = inputCss({});

      expect(css).toMatchSnapshot();
    });

    it('should have 100% when fullWidth is true', () => {
      const css = inputCss({ fullWidth: true });

      expect(css.width).toBe('100%');
    });

    it('should use provided width when fullWidth is undefined', () => {
      const css = inputCss({ width: '1rem' });

      expect(css.width).toBe('1rem');
    });

    it('should override wdith with 100% when fullWidth is true', () => {
      const css = inputCss({ width: '1rem', fullWidth: true });

      expect(css.width).toBe('100%');
    });

    it('should use minWidth and maxWidth', () => {
      const css = inputCss({ minWidth: '1rem', maxWidth: '2rem' });

      expect(css.minWidth).toBe('1rem');
      expect(css.maxWidth).toBe('2rem');
    });
  });
});
