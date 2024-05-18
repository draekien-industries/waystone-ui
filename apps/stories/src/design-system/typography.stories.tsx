import type { Meta, StoryObj } from '@storybook/react';
import { Text, textVariants } from '@waystone/text';

const TypographyDisplay = () => (
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
        }}>
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
        }}>
        {textVariants.map((key) => (
          <Text key={key} variant={key}>
            {key}
          </Text>
        ))}
      </div>
    </div>
  </article>
);

const meta: Meta<typeof TypographyDisplay> = {
  title: 'Design System/Typography',
  component: TypographyDisplay,
  parameters: {
    controls: {
      disable: true,
    },
  },
};

export default meta;

export const Typography: StoryObj<typeof meta> = {};
