import { styles } from '../styles';

describe('styles', () => {
  it('should match snapshot', () => {
    expect(styles).toMatchSnapshot();
  });
});
