import { Waystone, useFonts } from '@waystone/theme-provider';
import { useEffect } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import { useColorMode } from 'theme-ui';

const ThemeChanger = () => {
  const isDarkMode = useDarkMode();
  const [, setColorMode] = useColorMode();

  useEffect(() => {
    setColorMode(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return <></>;
};

export const WaystoneDecorator = (Story: any) => {
  useFonts();

  return (
    <Waystone>
      <ThemeChanger />
      <div style={{ maxWidth: 1280 }}>
        <Story />
      </div>
    </Waystone>
  );
};
