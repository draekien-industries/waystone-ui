/* eslint-disable no-param-reassign */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mergeObjects = (target: any, source: any) => {
  Object.keys(source).forEach((key) => {
    if (key === '__proto__' || key === 'constructor') return;

    if (source[key] && typeof source[key] === 'object') {
      mergeObjects((target[key] = target[key] || {}), source[key]);
      return;
    }

    target[key] = source[key];
  });
};
