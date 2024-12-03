import { Waystone, useFonts } from '@waystone/theme-provider';
import type { PropsWithChildren } from 'react';
import { useEffect } from 'react';
import { useColorMode } from 'theme-ui';

export const ThemeChanger = ({ children }: PropsWithChildren) => {
  const [, setColorMode] = useColorMode();

  useEffect(() => {
    setColorMode('light');
  }, []);

  return <>{children}</>;
};

export const FontLoader = ({ children }: PropsWithChildren) => {
  useFonts();
  return <>{children}</>;
};

export const WaystoneDecorator = ({ children }: PropsWithChildren) => {
  return (
    <Waystone>
      <div style={{ maxWidth: 1280 }}>{children}</div>
    </Waystone>
  );
};
