import { disabledCss, disabledWithBackgroundCss } from '../disabled.presets';

describe('Disabled presets', () => {
  it('disabledCss should match snapshot', () => {
    expect(disabledCss).toMatchSnapshot();
  });

  it('disabledWithBackgroundCss should match snapshot', () => {
    expect(disabledWithBackgroundCss).toMatchSnapshot();
  });
});
