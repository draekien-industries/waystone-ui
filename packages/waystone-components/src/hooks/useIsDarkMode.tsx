import { useColorMode } from 'theme-ui';

export const useIsDarkMode = () => {
  const [colorMode] = useColorMode();
  const darkMode = colorMode === 'dark';

  return darkMode;
};
