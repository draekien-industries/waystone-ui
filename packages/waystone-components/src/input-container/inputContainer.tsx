/** @jsxImportSource theme-ui */
import { StatusVariant } from '@waystone/core';
import { Flex } from 'theme-ui';
import { HasChildren, HasVariant, HasWidth } from '../common';
import { Label } from '../label';
import { Text } from '../text';
import * as styles from './inputContainer.styles';

export interface InputContainerProps
  extends HasVariant<StatusVariant>,
    HasChildren,
    HasWidth {
  id: string;
  label: string;
  helpText?: string;
  required?: boolean;
}

export const InputContainer = ({
  id,
  label,
  children,
  helpText,
  variant,
  required,
  ...rest
}: InputContainerProps) => {
  const variantColor = variant ? `${variant}-400` : 'b-400';

  return (
    <Flex sx={styles.inputContainerCss({ ...rest })}>
      <Flex sx={styles.labelContainerCss}>
        <Label htmlFor={id}>{label}</Label>
        {required && (
          <Text variant="small" color="error-400" inline>
            required
          </Text>
        )}
      </Flex>
      {children}
      {helpText && (
        <Text variant="small" color={variantColor} inline>
          {helpText}
        </Text>
      )}
    </Flex>
  );
};
