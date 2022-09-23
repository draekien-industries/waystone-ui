/** @jsxImportSource theme-ui */
import { Anchor, ButtonGroup, onClickProps, Text } from '@waystone/components';
import { Flex, useColorMode } from 'theme-ui';
import { Logo } from '../logo';

export interface TopBarProps {
  title: string;
}

export const TopBar = ({ title }: TopBarProps) => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Flex
      sx={{
        px: ['lg', 'lg', 'xl'],
        py: 'md',
        gap: 'lg',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Logo size="2.8125rem" color="highlight" />
      <Text sx={{ flexGrow: 1, fontWeight: 'medium' }} variant="hero">
        {title}
      </Text>
      <Flex as="nav" sx={{ gap: 'xl' }}>
        <Anchor href="/blog">
          <Text inline>Blog</Text>
        </Anchor>
        <Anchor
          href="mailto:hello@wpei.me"
          target="_blank"
          rel="nofollow noreferrer"
          arial-label="Email William Pei"
          external
        >
          <Text inline>Say Hello</Text>
        </Anchor>
      </Flex>
      <ButtonGroup
        buttons={[
          { id: 'light', icon: { name: 'light_mode', variant: 'filled' } },
          { id: 'dark', icon: { name: 'dark_mode', variant: 'filled' } },
        ]}
        activeButton={colorMode}
        onChange={({ clicked }: onClickProps) => {
          setColorMode(clicked as string);
        }}
      />
    </Flex>
  );
};
