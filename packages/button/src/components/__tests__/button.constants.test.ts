import { buttonSizes } from '../button.constants';

describe('Button Constants Values', () => {
  it('Sizes should match snapshot', () => {
    expect(buttonSizes).toMatchSnapshot();
  });

  it('Variants should match snapshot', () => {
    expect(buttonSizes).toMatchSnapshot();
  });
});
