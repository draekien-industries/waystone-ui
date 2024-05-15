import { boxShadowCss } from '../shadows.presets';

describe('Box Shadow preset', () => {
  it('should match snapshot', () => {
    expect(boxShadowCss).toMatchSnapshot();
  });
});
