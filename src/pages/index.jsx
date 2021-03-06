import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Layout from '@layouts';
import Anchor from '@components/Anchor';
import Button from '@components/Button';
import SEO from '@components/SEO';
import { Hero } from '@components/_styled/Heading';

import { startGameClickEvent } from '@events/eventList';

const Display = styled.div`
  text-align: center;
`;

export default function() {
  return (
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
        <p>
          All questions are made by the community and are available at the{' '}
          <Anchor href="https://github.com/vmarchesin/js-me-anything" newTab>
            Github repository
          </Anchor>
          . Feel free to contribute and improve the game.
        </p>
        <Link to="/menu">
          <Button onClick={startGameClickEvent}>LET&apos;S GO</Button>
        </Link>
      </Display>
    </Layout>
  );
}
