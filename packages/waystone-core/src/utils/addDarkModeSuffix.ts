export const addDarkModeSuffix = (
  value: string,
  darkMode?: boolean
): string => {
  if (darkMode) return `${value}-dark`;

  return value;
};
