import type { StylePropertyValue } from 'theme-ui';

/** Literal types */
export type Literal = string | number | symbol;

/** Omits literals from style property value so they show up in autocomplete */
export type ExtractLiteralsForAutocomplete<
  TStylePropertyValue extends StylePropertyValue<unknown>,
  TLiteral extends Literal,
> = TLiteral | Omit<TStylePropertyValue, TLiteral>;

/** Converts a type into an union of its own type and an array of its type */
export type OneOrMore<T> = T | Array<T>;
