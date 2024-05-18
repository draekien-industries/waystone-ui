import { variants } from '../variants';

describe('variants', () => {
  it('should match snapshot', () => {
    expect(variants).toMatchSnapshot();
  });
});
