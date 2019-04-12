import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '@layouts';
import Button from '@components/Button';
import SEO from '@components/SEO';
import { Hero } from '@components/_styled/Heading';

const Display = styled.div`
  text-align: center;
`;

const IndexPage = () => (
  <Layout>
    <SEO
      title="Test your JavaScript Skills"
      keywords={[`javascript`, `questions`, `interview`]}
    />
    <Hero>A tool to test your JavaScript skills.</Hero>
    <Display>
      <p>
        JS Me Anything (a pun with Ask Me Anything) is built to test your JS
        skills in various levels, from amateur to pro. Perfect to prepare for
        that job interview.
      </p>
      <Link to="/menu"><Button>LET'S GO</Button></Link>
    </Display>
  </Layout>
);

export default IndexPage;
