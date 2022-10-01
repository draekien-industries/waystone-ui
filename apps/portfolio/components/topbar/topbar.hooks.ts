import { ButtonProps, onClickProps } from '@waystone/components';
import { useColorMode } from 'theme-ui';

export const useColorModeSwitcher = () => {
  const [colorMode, setColorMode] = useColorMode();

  const changeColorMode = ({ clicked }: onClickProps) => {
    setColorMode(clicked as string);
  };

  const colorModeButtons: Pick<ButtonProps, 'id' | 'icon'>[] = [
    { id: 'light', icon: { name: 'light_mode', variant: 'filled' } },
    { id: 'dark', icon: { name: 'dark_mode', variant: 'filled' } },
  ];

  return { colorMode, changeColorMode, colorModeButtons };
};
