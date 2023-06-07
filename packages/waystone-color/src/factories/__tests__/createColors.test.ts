import { createColorScale } from '../createColors';
import { THEME_COLOR_STOPS } from '../../constants';

describe('createColorScale', () => {
  it('should match snapshot', () => {
    const result = createColorScale({
      name: 'grey',
      midPoint: '#666666',
    });

    expect(result).toMatchSnapshot();
  });

  it('should match snapshot with hue offset', () => {
    const result = createColorScale({
      name: 'blue',
      midPoint: '#0000FF',
      hueOffset: 50,
    });

    expect(result).toMatchSnapshot();
  });

  it('should match snapshot with saturation offset', () => {
    const result = createColorScale({
      name: 'blue',
      midPoint: '#0000FF',
      saturationOffset: 50,
    });

    expect(result).toMatchSnapshot();
  });

  it('should match snapshot with luminance bounds', () => {
    const result = createColorScale({
      name: 'blue',
      midPoint: '#0000FF',
      luminanceMax: 90,
      luminanceMin: 10,
    });

    expect(result).toMatchSnapshot();
  });

  it('should generate expected keys', () => {
    const result = createColorScale({
      name: 'grey',
      midPoint: '#666666',
    });

    const keys = Object.keys(result);

    THEME_COLOR_STOPS.forEach((stop) => {
      expect(keys).toContain(`grey-${stop}`);
    });
  });
});
