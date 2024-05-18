import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
} from 'react';
import { Text } from '@waystone/text';

export type LabelProps = {
  htmlFor: string;
  children: ReactNode;
} & ComponentPropsWithoutRef<'label'>;

export const Label = ({ htmlFor, ...rest }: LabelProps) => (
  <Text as="label" htmlFor={htmlFor} variant="label" {...rest} />
);
