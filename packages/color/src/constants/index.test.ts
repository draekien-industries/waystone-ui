import { COLOR_STOPS, THEME_COLOR_STOPS } from '.';

describe('Color constants', () => {
  it('theme color stops should match snapshot', () => {
    expect(THEME_COLOR_STOPS).toMatchSnapshot();
  });

  it('color stops should match snapshot', () => {
    expect(COLOR_STOPS).toMatchSnapshot();
  });
});
