import React from 'react';
import { PageLayout } from '../layouts';

const HomePage = () => (
  <PageLayout
    headProps={{
      title: '.NET Developer | William Pei',
      description: `William Pei's portfolio and blog where he showcases some of his work and shares his technical knowledge.`,
    }}
    topBarProps={{ title: 'William Pei' }}
  >
    Content
  </PageLayout>
);

export default HomePage;
