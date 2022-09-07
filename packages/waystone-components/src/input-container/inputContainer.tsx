/** @jsxImportSource theme-ui */
import { StatusVariant } from '@waystone/core';
import { Flex } from 'theme-ui';
import { HasChildren, HasVariant, HasWidth } from '../common';
import { Icon } from '../icon';
import { Label } from '../label';
import { Text } from '../text';
import * as styles from './inputContainer.styles';
import * as FX from './inputContainer.fx';

export interface InputContainerProps
  extends HasVariant<StatusVariant>,
    HasChildren,
    HasWidth {
  /** The ID of the input. Will be used in the label's `htmlFor` attribute. */
  id: string;
  /** The text to render as the label. */
  label: string;
  /** The text to render below the input. */
  helpText?: string;
  /** Is the input a required input. */
  required?: boolean;
}

/**
 * The container that wraps all inputs provided in this library. It is exposed in case you need to implement your own inputs.
 * For the best experience, do not consume this component directly.
 */
export const InputContainer = ({
  id,
  label,
  children,
  helpText,
  variant,
  required,
  ...rest
}: InputContainerProps) => {
  const color = FX.getVariantColor(variant);

  return (
    <Flex sx={styles.inputContainerCss({ ...rest })}>
      <Flex sx={styles.labelContainerCss}>
        <Flex sx={styles.labelCss}>
          <Label htmlFor={id}>{label}</Label>
          {variant && (
            <Icon color={color} name={FX.getIconName(variant)} size="sm" />
          )}
        </Flex>
        {required && (
          <Text variant="small" color="error-400" inline>
            required
          </Text>
        )}
      </Flex>
      {children}
      {helpText && (
        <Text variant="small" color={color} inline>
          {helpText}
        </Text>
      )}
    </Flex>
  );
};
