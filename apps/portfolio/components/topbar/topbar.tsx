/** @jsxImportSource theme-ui */
import { Anchor, ButtonGroup, Text } from '@waystone/components';
import Link from 'next/link';
import { Flex } from 'theme-ui';
import { Logo } from '../logo';
import { useColorModeSwitcher } from './topbar.hooks';
import * as styles from './topbar.styles';

export interface TopBarProps {
  title?: string;
}

const HomeLink = () => (
  <Link href="/" passHref>
    <Anchor noDecoration>
      <Logo size="2.8125rem" color="highlight" />
    </Anchor>
  </Link>
);

const BlogLink = () => (
  <Link href="/blog" passHref>
    <Anchor>
      <Text inline>Blog</Text>
    </Anchor>
  </Link>
);

const EmailLink = () => (
  <Anchor
    href="mailto:hello@wpei.me"
    target="_blank"
    rel="nofollow noreferrer"
    arial-label="Email William Pei"
    external
  >
    <Text inline>Say Hello</Text>
  </Anchor>
);

const Title = ({ title }: TopBarProps) => (
  <Text sx={styles.titleTextCss} variant="hero">
    {title}
  </Text>
);

export const TopBar = ({ title }: TopBarProps) => {
  const { colorMode, changeColorMode, colorModeButtons } =
    useColorModeSwitcher();

  return (
    <Flex as="nav" sx={styles.topBarContainerCss}>
      <HomeLink />
      <Title title={title} />
      <Flex sx={styles.linksContainerCss}>
        <BlogLink />
        <EmailLink />
        <ButtonGroup
          buttons={colorModeButtons}
          activeButton={colorMode}
          onChange={changeColorMode}
        />
      </Flex>
    </Flex>
  );
};
