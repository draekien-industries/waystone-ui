import type { Meta, StoryFn } from '@storybook/react';
import { Text } from '@waystone/components/src';
import { WaystoneBaseTheme } from '@waystone/core/src';
import type { FC, PropsWithChildren } from 'react';
import type { ColorMode, ColorModesScale } from 'theme-ui';

const Color: FC<PropsWithChildren<{ color: string }>> = ({
  color,
  children,
}) => (
  <div
    style={{
      position: 'relative',
      backgroundColor: color,
      height: '15rem',
      width: '12rem',
      borderRadius: '0.5rem',
      boxShadow:
        '0 0 0.25em 0 rgba(4, 40, 52, 0.1), 0 0.5em 1em -0.5em rgba(4, 40, 52, 0.25)',
    }}
  >
    <div
      style={{
        position: 'absolute',
        bottom: '2rem',
        left: 0,
        right: 0,
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        color: '#212121',
        backgroundColor: 'white',
        fontFamily: '"Barlow", sans-serif',
      }}
    >
      <Text>
        {children} - {color.toUpperCase()}
      </Text>
    </div>
  </div>
);

export const Colors: StoryFn = () => {
  const colors = WaystoneBaseTheme.colors
    ? { ...WaystoneBaseTheme.colors }
    : ({} as ColorModesScale);
  const darkMode = colors.modes ? colors.modes.dark : ({} as ColorMode);

  return (
    <div>
      <Text as="h1" variant="heading">
        Colors
      </Text>
      <Text>
        These are the default colors that ship with the Waystone design system.
      </Text>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          width: '100%',
          gap: '2rem',
          marginBottom: '2rem',
        }}
      >
        {Object.keys(colors).map((key) => {
          if (key === 'modes') return null;

          return (
            <Color key={key} color={colors[key] as string}>
              {key}
            </Color>
          );
        })}
      </div>
      <Text as="h2" variant="title">
        Dark Mode
      </Text>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          width: '100%',
          gap: '2rem',
          marginBottom: '2rem',
        }}
      >
        {Object.keys(darkMode).map((key) => (
          <Color key={key} color={darkMode[key] as string}>
            {key}
          </Color>
        ))}
      </div>
    </div>
  );
};

const meta: Meta<typeof Colors> = {
  title: 'Design System/Colors',
  component: Colors,
};

export default meta;
