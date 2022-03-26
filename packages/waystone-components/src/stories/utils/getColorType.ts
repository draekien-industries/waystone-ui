import { getThemeColorsSummary } from '../../utils';

export const getColorType = (required?: boolean) => ({
  summary: getThemeColorsSummary(),
  name: 'string',
  required: required || false,
});
