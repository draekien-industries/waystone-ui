import { waystoneTheme } from '../waystoneTheme';

describe('waystoneTheme', () => {
  it('should match snapshot', () => {
    expect(waystoneTheme).toMatchSnapshot();
  });
});
