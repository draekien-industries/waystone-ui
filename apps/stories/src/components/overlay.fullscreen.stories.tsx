import type { Meta, StoryObj } from '@storybook/react';
import { Overlay } from '@waystone/overlay';
import { Text } from '@waystone/text';
import { Box } from 'theme-ui';

const meta: Meta<typeof Overlay.FullScreen> = {
  title: 'Components/Overlay/FullScreen',
  component: Overlay.FullScreen,
  render: (args) => (
    <>
      <Overlay.FullScreen {...args} />
      <img src="/example-image.png" alt="example" />
      <Text>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
        enim incidunt culpa consequatur dolorum voluptatibus nulla nihil at
        odit! Porro architecto dolores explicabo, unde in eligendi numquam
        facilis delectus beatae.
      </Text>
    </>
  ),
};

export default meta;

export const Default: StoryObj<typeof meta> = {};

export const WithContent: StoryObj<typeof meta> = {
  args: {
    children: (
      <Box
        sx={{
          margin: 'extra-large',
          padding: 'extra-large',
          background: 'white',
          borderRadius: 'large',
          boxShadow: 'large',
        }}>
        <Text>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere sit
          explicabo tempora in esse deserunt, praesentium aliquam tempore aut
          quas quam recusandae vel cum quos ipsam dicta eligendi, earum
          corporis.
        </Text>
      </Box>
    ),
  },
};
