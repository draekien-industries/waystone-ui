import { createPowerSetPermutations } from './createPowerSetPermutations';

const classNameCombinations: Record<string, string[]> = {};

export const getClassNameCombinations = (classNames: string[]) => {
  if (classNames.length === 0 || classNames.length === 1) return classNames;
  const key = classNames.join('.');
  if (!classNameCombinations[key]) {
    classNameCombinations[key] = createPowerSetPermutations(classNames);
  }
  return classNameCombinations[key];
};
