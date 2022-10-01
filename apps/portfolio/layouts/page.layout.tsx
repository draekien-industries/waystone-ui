/** @jsxImportSource theme-ui */
import React from 'react';
import Head from 'next/head';
import { TopBar, TopBarProps } from '../components';

export interface HeadProps {
  title: string;
  description: string;
}

export interface PageLayoutProps {
  headProps: HeadProps;
  topBarProps?: TopBarProps;
}

export const PageLayout = ({
  headProps,
  topBarProps,
  children,
}: React.PropsWithChildren<PageLayoutProps>) => (
  <>
    <Head>
      <title>{headProps.title}</title>
      <meta name="description" content={headProps.description} />
    </Head>
    <TopBar {...topBarProps} />
    <main sx={{ px: 'xl' }}>{children}</main>
  </>
);
