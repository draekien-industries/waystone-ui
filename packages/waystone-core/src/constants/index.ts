/** A common set of sizes. */
export const Size = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

export type Size = keyof typeof Size;

/** A superset of sizes that contains 'xs' and 'xl'. */
export const SizeExtended = {
  xs: 'xs',
  ...Size,
  xl: 'xl',
};

/** A superset of sizes that contains 'xs' and 'xl'. */
export type SizeExtended = keyof typeof SizeExtended;

/** The horizontal alignment of content. */
export const HorizontalAlignment = {
  left: 'left',
  center: 'center',
  right: 'right',
};

/** The horizontal alignment of content. */
export type HorizontalAlignment = keyof typeof HorizontalAlignment;

/** The vertical alignment of content. */
export const VerticalAlignment = {
  top: 'top',
  center: 'center',
  bottom: 'bottom',
};

/** The vertical alignment of content. */
export type VerticalAlignment = keyof typeof VerticalAlignment;

/** The text variants available in the base theme. */
export enum TextVariant {
  hero = 'hero',
  heading = 'heading',
  title = 'title',
  subtitle = 'subtitle',
  eyebrow = 'eyebrow',
  body = 'body',
  caption = 'caption',
  small = 'small',
  monospace = 'monospace',
}

/** The status variants available in the base theme. */
export enum StatusVariant {
  info = 'info',
  warning = 'warning',
  error = 'error',
  success = 'success',
}
