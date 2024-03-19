/**
 * This is a workaround for allowing autocomplete for
 * union types containing literal and primitives.
 *
 * See https://github.com/Microsoft/TypeScript/issues/29729#issuecomment-505826972
 */
// eslint-disable-next-line @typescript-eslint/ban-types, no-use-before-define
export type StringLiteralUnion<T extends string> = T | (string & {});
