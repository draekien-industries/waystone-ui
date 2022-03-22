import React, { FC } from 'react';
import { Meta } from '@storybook/react';
import { Text } from '@waystone/components';
import { TextVariant, WaystoneBaseTheme } from '@waystone/core';

export const Typography: FC = () => (
  <article>
    <Text as="h1" variant="hero" style={{ marginBottom: '2rem' }}>
      Typography
    </Text>
    <div style={{ marginBottom: '2rem' }}>
      <Text>
        Waystone ships with two fonts by default - a sans-serif font and a
        monospace font.
        <br />
        These fonts are:
      </Text>
      <Text variant="title" style={{ marginRight: '4rem' }} inline>
        Barlow
      </Text>
      <Text variant="title" style={{ fontFamily: 'fira code' }} inline>
        Fira Code
      </Text>
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
        }}>
        {Object.keys(WaystoneBaseTheme.text)
          .filter((x) => x !== 'default')
          .map((key, index) => (
            <Text key={index} variant={key as TextVariant}>
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
