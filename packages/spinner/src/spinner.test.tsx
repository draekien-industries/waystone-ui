import { render } from '@waystone/testing-library';
import { Spinner } from './spinner';
import type { SpinnerSize } from './spinner.types';
import {
  borderCss,
  getSpinnerCss,
  pathKeyframes,
  transformKeyframes,
  widthCss,
} from './spinner.styles';

describe('<Spinner />', () => {
  const sizes = ['small', 'medium', 'large'] as const satisfies SpinnerSize[];

  describe('component', () => {
    describe.each(sizes)('size %s', (size) => {
      it('should match snapshot', () => {
        const { container } = render(<Spinner size={size} />);

        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('css', () => {
    describe('pathKeyframes', () => {
      it('should match snapshot', () => {
        expect(pathKeyframes).toMatchSnapshot();
      });
    });

    describe('transformKeyframes', () => {
      it('should match snapshot', () => {
        expect(transformKeyframes).toMatchSnapshot();
      });
    });

    describe('widthCss', () => {
      it('should match snapshot', () => {
        expect(widthCss).toMatchSnapshot();
      });
    });

    describe('borderCss', () => {
      it('should match snapshot', () => {
        expect(borderCss).toMatchSnapshot();
      });
    });

    describe.each(sizes)('size %s', (size) => {
      it('should match snapshot', () => {
        expect(getSpinnerCss({ size })).toMatchSnapshot();
      });
    });
  });
});
