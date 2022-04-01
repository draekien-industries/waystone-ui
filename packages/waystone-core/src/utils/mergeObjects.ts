/* eslint-disable no-param-reassign */
export const mergeObjects = (target: never, source: never) => {
  Object.keys(source).forEach((key) => {
    if (key === '__proto__' || key === 'constructor') return;

    if (source[key] && typeof source[key] === 'object') {
      mergeObjects((target[key] = target[key] || {}), source[key]);
      return;
    }

    target[key] = source[key];
  });
};
