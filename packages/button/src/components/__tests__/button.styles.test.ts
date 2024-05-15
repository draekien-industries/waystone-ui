import { buttonVariants } from '../button.constants';
import {
  getActiveBackgroundColor,
  getBackgroundColor,
  getColor,
  getHoverBackgroundColor,
  getInteractiveColor,
  paddingY,
} from '../button.styles';

describe('Button Styles', () => {
  describe.each(buttonVariants)('for variant %s', (variant) => {
    it('getBackgroundColor result matches snapshot', () => {
      const result = getBackgroundColor(variant);
      expect(result).toMatchSnapshot();
    });

    it('getHoverBackgroundColor result matches snapshot', () => {
      const result = getHoverBackgroundColor(variant);
      expect(result).toMatchSnapshot();
    });

    it('getActiveBackgroundColor result matches snapshot', () => {
      const result = getActiveBackgroundColor(variant);
      expect(result).toMatchSnapshot();
    });

    it('getColor result matches snapshot', () => {
      const result = getColor(variant);
      expect(result).toMatchSnapshot();
    });

    it('getInteractiveColor result matches snapshot', () => {
      const result = getInteractiveColor(variant);
      expect(result).toMatchSnapshot();
    });
  });

  it('paddingY should match snapshot', () => {
    expect(paddingY).toMatchSnapshot();
  });
});
