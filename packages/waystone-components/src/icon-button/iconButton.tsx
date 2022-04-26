/** @jsxImportSource theme-ui */
import { Flex } from 'theme-ui';
import { Button, ButtonProps } from '../button/button';
import { Icon, IconProps } from '../icon/icon';
import { Spinner } from '../spinner/spinner';

/** The props for rendering the icon button component. */
export interface IconButtonProps extends ButtonProps {
  /** The props for the icon component. */
  icon: IconProps;
  /** The position of the icon. */
  iconPosition: 'left' | 'right';
}

/** An extension of the {@link Button} component that accepts props for rendering an icon. */
export const IconButton = (props: IconButtonProps) => {
  const { icon, iconPosition, children, loading, disabled, ...rest } = props;
  const iconLeft = iconPosition === 'left';
  const iconRight = iconPosition === 'right';
  return (
    <Button disabled={loading || disabled} {...rest}>
      <Flex sx={{ alignItems: 'center' }}>
        {iconLeft && loading && <Spinner size="sm" />}
        {iconLeft && !loading && <Icon {...icon} />}
        <span
          sx={{
            paddingLeft: iconLeft && 'xs',
            paddingRight: iconRight && 'xs',
            lineHeight: 1,
          }}
        >
          {children}
        </span>
        {iconRight && !loading && <Icon {...icon} />}
        {iconRight && loading && <Spinner size="sm" />}
      </Flex>
    </Button>
  );
};
