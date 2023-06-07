export const constrainToRange = (value: number, min: number, max: number) => {
  if (max <= min) throw new Error('Max must be greater than min');

  if (value > max) return max;
  if (value < min) return min;

  return value;
};
