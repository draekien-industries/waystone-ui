import { getThemeTextVariantsSummary } from '../../utils';

export const getTextVariantType = (required?: boolean) => ({
  summary: getThemeTextVariantsSummary(),
  name: 'string',
  required: required || false,
});
