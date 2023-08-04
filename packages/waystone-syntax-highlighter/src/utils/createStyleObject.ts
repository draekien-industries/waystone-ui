import { StyleSheet } from '../lib';
import { getClassNameCombinations } from './getClassNameCombinations';

export type CreateStyleObjectOptions = {
  classNames: string[];
  stylesheet: StyleSheet;
};

export const createStyleObject = ({
  classNames,
  stylesheet,
}: CreateStyleObjectOptions) => {
  const nonTokenClassNames = classNames.filter(
    (className) => className !== 'token'
  );
  const classNamesCombinations = getClassNameCombinations(nonTokenClassNames);
  return classNamesCombinations.reduce(
    (styleObject, className) => ({
      ...styleObject,
      ...stylesheet[className as keyof typeof stylesheet],
    }),
    {}
  );
};
