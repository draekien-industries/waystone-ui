import type { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import { Text } from '@waystone/text';

export type LabelProps = {
  htmlFor: string;
} & ComponentPropsWithoutRef<'label'>;

export const Label = ({ htmlFor, ...rest }: LabelProps) => (
  <Text as="label" htmlFor={htmlFor} variant="label" {...rest} />
);
