import { render } from '@waystone/testing-library';
import { FormField } from './formField';
import { formFieldCss } from './formField.styles';

describe('<FormField />', () => {
  describe('component', () => {
    it('should render children', () => {
      const { container } = render(<FormField>child</FormField>);

      expect(container).toMatchSnapshot();
    });
  });

  describe('css', () => {
    it('should match snapshot', () => {
      expect(formFieldCss).toMatchSnapshot();
    });
  });
});
