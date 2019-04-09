import React from 'react';
import { Link } from 'gatsby';

import Layout from '@layouts';
import Image from '@components/Image';
import Button from '@components/Button';
import SEO from '@components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`javascript`, `questions`, `interview`]} />
    <h1>MENU</h1>
  </Layout>
);

export default IndexPage;
