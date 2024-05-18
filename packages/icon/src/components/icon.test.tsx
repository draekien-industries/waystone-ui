import { render } from '@waystone/testing-library';
import { Icon } from './icon';
import type { IconSize, IconVariant } from './icon.types';
import { iconCss } from './icon.styles';

describe('<Icon />', () => {
  const sizes = [
    'large',
    'medium',
    'small',
    'extra-small',
  ] as const satisfies IconSize[];

  const variants = [
    'filled',
    'outlined',
    'round',
    'sharp',
    'two-tone',
  ] as const satisfies IconVariant[];

  describe('component', () => {
    it('should match snapshot', () => {
      const { container } = render(<Icon>accessibility</Icon>);

      expect(container).toMatchSnapshot();
    });

    describe.each(sizes)('size %s', (size) => {
      it('should match snapshot', () => {
        const { container } = render(<Icon size={size}>accessibility</Icon>);

        expect(container).toMatchSnapshot();
      });
    });

    describe.each(variants)('variant %s', (variant) => {
      it('should match snapshot', () => {
        const { container } = render(
          <Icon variant={variant}>accessibility</Icon>
        );

        expect(container).toMatchSnapshot();
      });
    });
  });

  describe('css', () => {
    it('should match snapshot', () => {
      const css = iconCss({});

      expect(css).toMatchSnapshot();
    });
  });
});
