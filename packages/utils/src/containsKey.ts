export type ObjectWithKey<K extends PropertyKey> = {
  [key in K]: unknown;
};

export const containsKey = <K extends ReadonlyArray<PropertyKey>>(
  value: object,
  ...keys: K
): value is ObjectWithKey<K[number]> =>
  keys.every((key) => Object.hasOwn(value, key));
