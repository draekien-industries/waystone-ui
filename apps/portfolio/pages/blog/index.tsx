import React from 'react';
import { PageLayout } from '../../layouts';

const BlogPage = () => (
  <PageLayout
    headProps={{
      title: 'Code With Me | Blog | William Pei',
      description: `William Pei's portfolio and blog where he showcases some of his work and shares his technical knowledge.`,
    }}
    topBarProps={{ title: 'Code With Me' }}
  >
    Blog Content
  </PageLayout>
);

export default BlogPage;
