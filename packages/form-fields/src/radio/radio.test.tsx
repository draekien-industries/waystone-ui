import { render } from '@waystone/testing-library';
import { Radio } from './radio';
import { containerCss, inputCss, labelCss } from './radio.styles';

describe('<Radio />', () => {
  describe('component', () => {
    it('should match snapshot', () => {
      const { container } = render(<Radio id="test-radio" label="Option 1" />);

      expect(container).toMatchSnapshot();
    });
  });

  describe('css', () => {
    describe('container', () => {
      it('should match snapshot', () => {
        expect(containerCss).toMatchSnapshot();
      });
    });

    describe('input', () => {
      it('should match snapshot', () => {
        expect(inputCss).toMatchSnapshot();
      });
    });

    describe('label', () => {
      it('should match snapshot', () => {
        expect(labelCss).toMatchSnapshot();
      });
    });
  });
});
