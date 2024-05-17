import { layouts } from '../layouts';

describe('layouts', () => {
  it('should match snapshot', () => {
    expect(layouts).toMatchSnapshot();
  });
});
