import { cssSelectors } from '../selectors.presets';

describe('CSS Selector presets', () => {
  it('cssSelectors should match snapshot', () => {
    expect(cssSelectors).toMatchSnapshot();
  });
});
