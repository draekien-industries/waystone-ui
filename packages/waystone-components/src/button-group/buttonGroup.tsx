'use client';

import { Flex } from 'theme-ui';
import { Button, ButtonProps } from '../button';
import { buttonGroupCss } from './buttonGroup.styles';

/** The props provided to the onClick callback */
export type onClickProps = {
  /** The raw react mouse event. */
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  /** The button that was clicked. */
  clicked: string;
};

/** The props for the button group component. */
export interface ButtonGroupProps {
  /** The button that is currently active. */
  activeButton?: string;
  /** The buttons to be rendered. */
  buttons: Pick<ButtonProps, 'id' | 'children' | 'icon'>[];
  /** The callback function that will be called when the active button changes. */
  onChange?: (props: onClickProps) => void;
}

/**
 * Renders a button group component which allows one button to be selected at a time.
 * @param props - the {@link ButtonGroupProps}
 * @returns the button group component
 */
export const ButtonGroup = ({
  activeButton,
  buttons,
  onChange,
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
