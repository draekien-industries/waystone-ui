/** A common set of sizes. */
export const Size = {
  small: 'small',
  medium: 'medium',
  large: 'large',
} as const;

export type Size = keyof typeof Size;

/** A superset of sizes that contains 'extra-small' and 'extra-large'. */
export const SizeExtended = {
  'extra-small': 'extra-small',
  ...Size,
  'extra-large': 'extra-large',
} as const;

/** A superset of sizes that contains 'extra-small' and 'extra-large'. */
export type SizeExtended = keyof typeof SizeExtended;

/** The horizontal alignment of content. */
export const HorizontalAlignment = {
  left: 'left',
  center: 'center',
  right: 'right',
} as const;

/** The horizontal alignment of content. */
export type HorizontalAlignment = keyof typeof HorizontalAlignment;

/** The vertical alignment of content. */
export const VerticalAlignment = {
  top: 'top',
  center: 'center',
  bottom: 'bottom',
} as const;

/** The vertical alignment of content. */
export type VerticalAlignment = keyof typeof VerticalAlignment;

/** The text variants available in the base theme. */
export const TextVariant = {
  hero: 'hero',
  heading: 'heading',
  title: 'title',
  subtitle: 'subtitle',
  eyebrow: 'eyebrow',
  body: 'body',
  caption: 'caption',
  small: 'small',
  monospace: 'monospace',
} as const;

/** The text variants available in the base theme. */
export type TextVariant = keyof typeof TextVariant;

/** The status variants available in the base theme. */
export const StatusVariant = {
  info: 'info',
  warning: 'warning',
  error: 'error',
  success: 'success',
} as const;

/** The status variants available in the base theme. */
export type StatusVariant = keyof typeof StatusVariant;

export const ButtonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  highlight: 'highlight',
  accent: 'accent',
  ghost: 'ghost',
  link: 'link',
} as const;

export type ButtonVariant = keyof typeof ButtonVariant;
