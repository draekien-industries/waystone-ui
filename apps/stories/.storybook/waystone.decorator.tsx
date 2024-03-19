import { Waystone } from '@waystone/theme';
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

export const waystoneDecorator = (storyFn: any) => (
  <Waystone>
    <ThemeChanger />
    <div style={{ maxWidth: 1280 }}>{storyFn()}</div>
  </Waystone>
);
