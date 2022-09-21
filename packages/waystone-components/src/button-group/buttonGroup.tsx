/** @jsxImportSource theme-ui */
import React from 'react';
import { Flex } from 'theme-ui';
import { Button, ButtonProps } from '../button';
import { buttonGroupCss } from './buttonGroup.styles';

/** The props provided to the onClick callback */
export type onClickProps = {
  /** The raw react mouse event. */
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  /** The index of the button that was clicked. */
  index: number;
};

/** The props for the button group component. */
export interface ButtonGroupProps {
  /** The buttons to be rendered. */
  buttons: Pick<ButtonProps, 'children' | 'icon'>[];
  /** The callback function that will be called when the active button changes. */
  onChange?: (props: onClickProps) => void;
}

/**
 * Renders a button group component which allows one button to be selected at a time.
 * @param props - the {@link ButtonGroupProps}
 * @returns the button group component
 */
export const ButtonGroup = ({ buttons, onChange }: ButtonGroupProps) => {
  const [activeButton, setActiveButton] = React.useState<number>();

  return (
    <Flex sx={buttonGroupCss}>
      {buttons.map((button, index) => (
        <Button
          key={button.children}
          {...button}
          variant="ghost"
          active={index === activeButton}
          onClick={(e) => {
            if (activeButton === index) return;
            setActiveButton(() => index);
            if (onChange) onChange({ e, index });
          }}
        />
      ))}
    </Flex>
  );
};
