'use client';

import { Flex } from 'theme-ui';
import type { MouseEventHandler } from 'react';
import type { ButtonProps } from '../button';
import { Button } from '../button';
import { buttonGroupCss } from './buttonGroup.styles';

/** The props provided to the onClick callback */
export type onClickProps = {
  /** The button that was clicked. */
  clicked: string;
  /** The raw click event */
  e: Parameters<MouseEventHandler<HTMLButtonElement>>[0];
};

/** The props for the button group component. */
export type ButtonGroupProps = {
  /** The button that is currently active. */
  activeButton?: string;
  /** The buttons to be rendered. */
  buttons: Pick<ButtonProps, 'id' | 'children' | 'icon'>[];
  /** The callback function that will be called when the active button changes. */
  onChange?: (props: onClickProps) => void;
  /**
   * The size of the buttons
   * @default sm
   */
  size?: ButtonProps['size'];
};

/**
 * Renders a button group component which allows one button to be selected at a time.
 * @param props - the {@link ButtonGroupProps}
 * @returns the button group component
 */
export const ButtonGroup = ({
  activeButton,
  buttons,
  onChange,
  size,
}: ButtonGroupProps) => (
  <Flex sx={buttonGroupCss}>
    {buttons.map((button) => {
      if (!button.id) {
        throw new Error('You must provide an `id` for each button');
      }

      const key = button.id;

      return (
        <Button
          {...button}
          key={key}
          size={size}
          variant="ghost"
          active={key === activeButton}
          onClick={(e) => {
            if (onChange) onChange({ e, clicked: key });
          }}
        />
      );
    })}
  </Flex>
);
