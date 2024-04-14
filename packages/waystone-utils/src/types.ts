/**
 * Allows TS autocomplete to suggest literals for types which accept
 * a string and some literal strings
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export type FuzzyStringLiteral<T extends string> = T | ({} & string);

/**
 * Assigns the properties of B into A, overriding any existing type with the same key
 */
export type Assign<A, B> = B & Omit<A, keyof B>;