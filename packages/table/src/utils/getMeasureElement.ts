export const getMeasureElement = () =>
  typeof window !== 'undefined' && navigator.userAgent.indexOf('Firefox') === -1
    ? (element: Element) => element?.getBoundingClientRect().height
    : undefined;
