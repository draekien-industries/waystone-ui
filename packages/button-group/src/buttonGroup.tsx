'use client';

import { type MouseEvent as ReactMouseEvent } from 'react';
import { Button, type ButtonProps, type ButtonSize } from '@waystone/button';
import { Flex } from 'theme-ui';

export type ButtonGroupItemProps = Omit<
  ButtonProps,
  | 'active'
  | 'size'
  | 'variant'
  | 'color'
  | 'fullWidth'
  | 'loading'
  | 'id'
  | 'key'
  | 'button'
>;

export type ButtonGroupItem<TIdentifier extends string = string> = {
  id: TIdentifier;
} & ButtonGroupItemProps;

export type ButtonGroupProps<TIdentifier extends string = string> = {
  /** The ID of the button that is currently selected */
  selected?: TIdentifier;
  /**
   * The collection of buttons to render inside the group.
   * A unique collection is extracted using the `id` of each button.
   */
  buttons: Array<ButtonGroupItem<TIdentifier>>;
  /** The callback that will be invoked when the selected button changes. */
  onChange?: (
    selected: NoInfer<TIdentifier>,
    e: ReactMouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
  /** The size of the button group */
  size?: ButtonSize;
};

/**
 * Renders a group of buttons where only one button is able to be selected at the same time
 * @param param0
 * @returns
 */
export const ButtonGroup = <TIdentifier extends string = string>({
  buttons = [],
  selected,
  onChange,
  size = 'small',
}: ButtonGroupProps<TIdentifier>) => {
  if (!buttons.length) return null;

  const uniqueButtons = [
    ...new Map(
      buttons.filter(Boolean).map((button) => [button.id, button])
    ).values(),
  ];

  return (
    <Flex
      sx={{
        gap: 'small',
        padding: 'extra-small',
        borderRadius: 'small',
        backgroundColor: 'ghost',
        width: 'fit-content',
      }}>
      {uniqueButtons.map(({ id, ...rest }) => (
        <Button
          id={id}
          key={id}
          active={id === selected}
          variant="ghost"
          size={size}
          type="button"
          onClick={(e) => {
            if (onChange) onChange(id, e);
          }}
          {...rest}
        />
      ))}
    </Flex>
  );
};
