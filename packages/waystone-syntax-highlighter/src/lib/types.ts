import { Span, Text } from './lowlight';
import * as styles from './styles';

export type StyleName = keyof typeof styles;

export type StyleSheet = (typeof styles)[keyof typeof styles];

/** The children returned by the {@linkcode lowlight.highlight} function */
export type Tree = Array<Span | Text>;

/** A node in the {@linkcode Tree} */
export type Node = Span | Text;
