import type { Span, Text } from './lowlight';

/** The children returned by the {@linkcode lowlight.highlight} function */
export type Tree = Array<Span | Text>;

/** A node in the {@linkcode Tree} */
export type Node = Span | Text;
