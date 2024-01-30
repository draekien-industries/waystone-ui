import { Meta } from '@storybook/react';
import { Text } from '@waystone/components/src';
import { TextVariant, WaystoneBaseTheme } from '@waystone/core/src';
import { FC } from 'react';
import { ThemeUIStyleObject } from 'theme-ui';

export const Typography: FC = () => (
  <article>
    <Text as="h1" variant="hero">
      Typography
    </Text>
    <div style={{ marginBottom: '2rem' }}>
      <Text>
        Waystone ships with two fonts by default - a sans-serif font and a
        monospace font.
        <br />
        These fonts are:
      </Text>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          gap: '2rem',
        }}
      >
        <Text variant="title" inline>
          Barlow
        </Text>
        <Text variant="title" inline>
          <span style={{ fontFamily: 'Fira Code' }}>Fira Code</span>
        </Text>
      </div>
    </div>
    <hr />
    <div>
      <Text as="h2" variant="heading">
        Variants
      </Text>
      <Text>
        Here are the different text variants that are included by default:
      </Text>
      <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
          gap: '2rem',
          alignItems: 'baseline',
        }}
      >
        {Object.keys(
          WaystoneBaseTheme.text || ({} as Record<string, ThemeUIStyleObject>)
        )
          .filter((x) => x !== 'default')
          .map((key) => (
            <Text key={key} variant={key as TextVariant}>
              {key}
            </Text>
          ))}
      </div>
    </div>
  </article>
);

export default {
  title: 'Design System/Typography',
  component: Typography,
} as Meta;
