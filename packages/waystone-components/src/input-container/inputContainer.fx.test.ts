import { StatusVariant } from '@waystone/core';
import * as FX from './inputContainer.fx';

const variants = [
  StatusVariant.error,
  StatusVariant.info,
  StatusVariant.success,
  StatusVariant.warning,
];
const iconNameByVariant = {
  [StatusVariant.error]: 'error',
  [StatusVariant.info]: 'info',
  [StatusVariant.warning]: 'warning',
  [StatusVariant.success]: 'check_circle',
};

describe('InputContainer FX', () => {
  variants.forEach((variant) => {
    describe(`${variant}`, () => {
      it('returns the expected iconName', () => {
        const iconName = FX.getIconName(variant);

        expect(iconName).toBe(iconNameByVariant[variant]);
      });

      it('returns the expected color', () => {
        const color = FX.getVariantColor(variant);

        expect(color).toBe(`${variant}-400`);
      });
    });
  });
});
