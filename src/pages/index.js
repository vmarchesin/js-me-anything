import React from 'react';
import { Link } from 'gatsby';

import Layout from '@layouts';
import Image from '@components/Image';
import Button from '@components/Button';
import SEO from '@components/SEO';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`javascript`, `questions`, `interview`]} />
    <h1>A tool to improve your JavaScript skills.</h1>
    <p>
      JS Me Anything (a pun with Ask Me Anything) is built to test your JS
      skills in various levels, from amateur to pro.
    </p>
    <p>Pick a level or subject and test your knowledge.</p>
    <Image filename="gatsby-astronaut.png" width={200} />
    <Button>
      <Link to="/menu">Let's Go</Link>
    </Button>
  </Layout>
);

export default IndexPage;
