import { breakpoints } from '../breakpoints';

describe('breakpoints', () => {
  it('should match snapshot', () => {
    expect(breakpoints).toMatchSnapshot();
  });
});
