export const containsKey = (
  value: object,
  key: string | symbol
): value is { [key: PropertyKey]: unknown } => Object.hasOwn(value, key);
