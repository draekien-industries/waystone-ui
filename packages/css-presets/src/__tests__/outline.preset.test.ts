import { outlineCss } from '../outline.presets';

describe('Outline presets', () => {
  it('outlineCss should match snapshot', () => {
    expect(outlineCss).toMatchSnapshot();
  });
});
