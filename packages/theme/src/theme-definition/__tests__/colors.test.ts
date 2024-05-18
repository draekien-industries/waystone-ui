import { colors } from '../colors';

describe('colors', () => {
  it('should match snapshot', () => {
    expect(colors).toMatchSnapshot();
  });
});
