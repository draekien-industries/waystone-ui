import { typography } from '../typography';

describe('typography', () => {
  it('should match snapshot', () => {
    expect(typography).toMatchSnapshot();
  });
});
