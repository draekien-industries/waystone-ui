import { StatusVariant } from '@waystone/core';
import { InputContainer } from './inputContainer';
import { render, screen } from '../__fixtures__';
import { getIconName } from './inputContainer.fx';

describe('The InputContainer component', () => {
  it('should match snapshot', () => {
    const { container } = render(
      <InputContainer id="testInput" label="Test Input">
        <input id="testInput" />
      </InputContainer>
    );

    expect(container).toMatchSnapshot();
  });

  it('should render help text', async () => {
    render(
      <InputContainer id="testInput" label="Test Input" helpText="help!">
        <input id="testInput" />
      </InputContainer>
    );

    const helpText = await screen.findByText('help!');

    expect(helpText).toBeInTheDocument();
  });

  const variants: StatusVariant[] = [
    StatusVariant.info,
    StatusVariant.warning,
    StatusVariant.success,
    StatusVariant.error,
  ];

  variants.forEach((variant) =>
    it(`renders the correct icon for variant ${variant}`, async () => {
      render(
        <InputContainer id="testInput" label="Test Input" variant={variant}>
          <input id="testInput" />
        </InputContainer>
      );

      const iconName = getIconName(variant);

      const icon = await screen.findByText(iconName);

      expect(icon).toBeInTheDocument();
    })
  );
});
