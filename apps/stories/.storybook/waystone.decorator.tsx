/** @jsxImportSource theme-ui */
import { useEffect } from 'react';
import { useColorMode } from 'theme-ui';
import { Waystone } from '@waystone/components/src';
import { useDarkMode } from 'storybook-dark-mode';

const ThemeChanger = () => {
  const isDarkMode = useDarkMode();
  const [, setColorMode] = useColorMode();

  useEffect(() => {
    setColorMode(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return <div />;
};

export const waystoneDecorator = (storyFn: any) => (
  <Waystone>
    <ThemeChanger />
    <div style={{ maxWidth: 1280 }}>{storyFn()}</div>
  </Waystone>
);
