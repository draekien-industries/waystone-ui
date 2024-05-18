import type { ArgTypes } from '@storybook/react';
import { waystoneTheme } from '@waystone/theme';

export const getThemeColors = () =>
  Object.keys(waystoneTheme.colors!).filter((c) => c !== 'modes');

export const getThemeColorsSummary = () => getThemeColors().join(',');

export const getThemeTextVariants = () => Object.keys(waystoneTheme.text!);

export const getThemeTextVariantsSummary = () =>
  getThemeTextVariants().join('|');

export const getThemeSpaces = () => Object.keys(waystoneTheme.space);

export const getThemeSizes = () => Object.keys(waystoneTheme.sizes);

export const getThemeShadows = () => Object.keys(waystoneTheme.shadows);

export type CreateEnumArgTypeOptions = {
  options: Readonly<Array<string | number>>;
  category?: string;
  summary: string;
  fuzzyTypes?: ['string', 'number'] | 'string' | 'number';
};

type InputType = ArgTypes[keyof ArgTypes];

export const createEnumArgType = ({
  options,
  summary,
  fuzzyTypes = 'string',
}: CreateEnumArgTypeOptions) =>
  ({
    type: {
      name: 'enum',
      value: [...options],
    },
    control: 'select',
    table: {
      type: {
        summary,
        detail:
          options.length > 4
            ? '| ' +
              [
                ...options.map((x) => `"${x}"`),
                ...(Array.isArray(fuzzyTypes) ? fuzzyTypes : [fuzzyTypes]),
              ].join('\n| ')
            : [
                ...options.map((x) => `"${x}"`),
                ...(Array.isArray(fuzzyTypes) ? fuzzyTypes : [fuzzyTypes]),
              ].join(' | '),
      },
    },
  }) as const satisfies InputType;

export const argTypes = {
  size: createEnumArgType({
    options: getThemeSizes(),
    summary: 'size',
    fuzzyTypes: ['string', 'number'],
  }),
  space: createEnumArgType({
    options: getThemeSpaces(),
    summary: 'space',
    fuzzyTypes: ['string', 'number'],
  }),
  shadow: createEnumArgType({
    options: getThemeShadows(),
    summary: 'shadow',
    fuzzyTypes: 'string',
  }),
  color: createEnumArgType({
    options: getThemeColors(),
    summary: 'color',
    fuzzyTypes: 'string',
  }),
};
