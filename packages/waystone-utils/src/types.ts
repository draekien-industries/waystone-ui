/**
 * Allows TS autocomplete to suggest literals for types which accept
 * a string and some literal strings
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type FuzzyStringLiteral<T extends string> = T | ({} & string);
