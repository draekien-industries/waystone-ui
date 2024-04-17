export const cssSelectors = {
  focusVisible: ':enabled:not(active):focus-visible',
  active: ':enabled:active',
  hover: ':enabled:not(active):hover',
  disabled: ':disabled',
} as const;
