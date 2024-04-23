// Get all possible permutations of all power sets
//
// Super simple, non-algorithmic solution since the
// number of class names will not be greater than 4
export const createPowerSetPermutations = (arr: string[]) => {
  const arrLength = arr.length;
  if (arrLength === 0 || arrLength === 1) return arr;
  if (arrLength === 2) {
    // prettier-ignore
    return [
      arr[0],
      arr[1],
      `${arr[0]}.${arr[1]}`,
      `${arr[1]}.${arr[0]}`
    ];
  }
  if (arrLength === 3) {
    return [
      arr[0],
      arr[1],
      arr[2],
      `${arr[0]}.${arr[1]}`,
      `${arr[0]}.${arr[2]}`,
      `${arr[1]}.${arr[0]}`,
      `${arr[1]}.${arr[2]}`,
      `${arr[2]}.${arr[0]}`,
      `${arr[2]}.${arr[1]}`,
      `${arr[0]}.${arr[1]}.${arr[2]}`,
      `${arr[0]}.${arr[2]}.${arr[1]}`,
      `${arr[1]}.${arr[0]}.${arr[2]}`,
      `${arr[1]}.${arr[2]}.${arr[0]}`,
      `${arr[2]}.${arr[0]}.${arr[1]}`,
      `${arr[2]}.${arr[1]}.${arr[0]}`,
    ];
  }
  if (arrLength >= 4) {
    // Currently does not support more than 4 extra
    // class names (after `.token` has been removed)
    return [
      arr[0],
      arr[1],
      arr[2],
      arr[3],
      `${arr[0]}.${arr[1]}`,
      `${arr[0]}.${arr[2]}`,
      `${arr[0]}.${arr[3]}`,
      `${arr[1]}.${arr[0]}`,
      `${arr[1]}.${arr[2]}`,
      `${arr[1]}.${arr[3]}`,
      `${arr[2]}.${arr[0]}`,
      `${arr[2]}.${arr[1]}`,
      `${arr[2]}.${arr[3]}`,
      `${arr[3]}.${arr[0]}`,
      `${arr[3]}.${arr[1]}`,
      `${arr[3]}.${arr[2]}`,
      `${arr[0]}.${arr[1]}.${arr[2]}`,
      `${arr[0]}.${arr[1]}.${arr[3]}`,
      `${arr[0]}.${arr[2]}.${arr[1]}`,
      `${arr[0]}.${arr[2]}.${arr[3]}`,
      `${arr[0]}.${arr[3]}.${arr[1]}`,
      `${arr[0]}.${arr[3]}.${arr[2]}`,
      `${arr[1]}.${arr[0]}.${arr[2]}`,
      `${arr[1]}.${arr[0]}.${arr[3]}`,
      `${arr[1]}.${arr[2]}.${arr[0]}`,
      `${arr[1]}.${arr[2]}.${arr[3]}`,
      `${arr[1]}.${arr[3]}.${arr[0]}`,
      `${arr[1]}.${arr[3]}.${arr[2]}`,
      `${arr[2]}.${arr[0]}.${arr[1]}`,
      `${arr[2]}.${arr[0]}.${arr[3]}`,
      `${arr[2]}.${arr[1]}.${arr[0]}`,
      `${arr[2]}.${arr[1]}.${arr[3]}`,
      `${arr[2]}.${arr[3]}.${arr[0]}`,
      `${arr[2]}.${arr[3]}.${arr[1]}`,
      `${arr[3]}.${arr[0]}.${arr[1]}`,
      `${arr[3]}.${arr[0]}.${arr[2]}`,
      `${arr[3]}.${arr[1]}.${arr[0]}`,
      `${arr[3]}.${arr[1]}.${arr[2]}`,
      `${arr[3]}.${arr[2]}.${arr[0]}`,
      `${arr[3]}.${arr[2]}.${arr[1]}`,
      `${arr[0]}.${arr[1]}.${arr[2]}.${arr[3]}`,
      `${arr[0]}.${arr[1]}.${arr[3]}.${arr[2]}`,
      `${arr[0]}.${arr[2]}.${arr[1]}.${arr[3]}`,
      `${arr[0]}.${arr[2]}.${arr[3]}.${arr[1]}`,
      `${arr[0]}.${arr[3]}.${arr[1]}.${arr[2]}`,
      `${arr[0]}.${arr[3]}.${arr[2]}.${arr[1]}`,
      `${arr[1]}.${arr[0]}.${arr[2]}.${arr[3]}`,
      `${arr[1]}.${arr[0]}.${arr[3]}.${arr[2]}`,
      `${arr[1]}.${arr[2]}.${arr[0]}.${arr[3]}`,
      `${arr[1]}.${arr[2]}.${arr[3]}.${arr[0]}`,
      `${arr[1]}.${arr[3]}.${arr[0]}.${arr[2]}`,
      `${arr[1]}.${arr[3]}.${arr[2]}.${arr[0]}`,
      `${arr[2]}.${arr[0]}.${arr[1]}.${arr[3]}`,
      `${arr[2]}.${arr[0]}.${arr[3]}.${arr[1]}`,
      `${arr[2]}.${arr[1]}.${arr[0]}.${arr[3]}`,
      `${arr[2]}.${arr[1]}.${arr[3]}.${arr[0]}`,
      `${arr[2]}.${arr[3]}.${arr[0]}.${arr[1]}`,
      `${arr[2]}.${arr[3]}.${arr[1]}.${arr[0]}`,
      `${arr[3]}.${arr[0]}.${arr[1]}.${arr[2]}`,
      `${arr[3]}.${arr[0]}.${arr[2]}.${arr[1]}`,
      `${arr[3]}.${arr[1]}.${arr[0]}.${arr[2]}`,
      `${arr[3]}.${arr[1]}.${arr[2]}.${arr[0]}`,
      `${arr[3]}.${arr[2]}.${arr[0]}.${arr[1]}`,
      `${arr[3]}.${arr[2]}.${arr[1]}.${arr[0]}`,
    ];
  }

  return [];
};
