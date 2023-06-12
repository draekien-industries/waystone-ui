import { containsKey } from './containsKey';
import { isObject } from './isObject';

export const isDeepEqual = (left: unknown, right: unknown) => {
  if (!isObject(left) || !isObject(right)) {
    throw new Error('Left and Right must both be objects');
  }

  const leftKeys = Object.keys(left);
  const rightKeys = Object.keys(right);

  if (leftKeys.length !== rightKeys.length) return false;

  for (let i = 0; i < leftKeys.length; i++) {
    const key = leftKeys[i];

    if (!containsKey(left, key) || !containsKey(right, key)) {
      return false;
    }

    const leftValue = left[key];
    const rightValue = right[key];

    const areObjects = isObject(leftValue) && isObject(rightValue);

    if (areObjects && !isDeepEqual(leftValue, rightValue)) {
      return false;
    }

    if (!areObjects && leftValue !== rightValue) {
      return false;
    }
  }

  return true;
};
