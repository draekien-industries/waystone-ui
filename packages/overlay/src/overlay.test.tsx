import { render } from '@waystone/testing-library';
import { Overlay } from './overlay';
import { absoluteCss, fullScreenCss } from './overlay.styles';

describe('<Overlay.Absolute />', () => {
  describe('component', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <div style={{ position: 'relative' }}>
          <Overlay.Absolute>Content</Overlay.Absolute>
        </div>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('css', () => {
    it('should match snapshot', () => {
      const css = absoluteCss({});

      expect(css).toMatchSnapshot();
    });

    it('should use provided options', () => {
      const css = absoluteCss({
        blur: 0.1,
        backgroundColor: 'a-100',
        backgroundOpacity: 0.1,
      });

      expect(css).toMatchSnapshot();
    });
  });
});

describe('<Overlay.FullScreen />', () => {
  describe('component', () => {
    it('should match snapshot', () => {
      const { container } = render(
        <Overlay.FullScreen>Content</Overlay.FullScreen>
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('css', () => {
    it('should match snapshot', () => {
      const css = fullScreenCss({});

      expect(css).toMatchSnapshot();
    });

    it('should use provided options', () => {
      const css = fullScreenCss({
        blur: 0.1,
        backgroundColor: 'a-100',
        backgroundOpacity: 0.1,
      });

      expect(css).toMatchSnapshot();
    });
  });
});
