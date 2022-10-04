import { FC, PropsWithChildren } from 'react';
import type { EmptyObject } from 'type-fest';

/**
 * Shorthand typing for a React Functional Component
 * that supports children as a prop.
 */
export type FCC<P = EmptyObject> = FC<PropsWithChildren<P>>;
