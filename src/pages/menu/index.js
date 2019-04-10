import React, { useState } from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { navigate } from 'gatsby';

import Layout from '@layouts';
import Image from '@components/Image';
import Button from '@components/Button';
import Card from '@components/Card';
import SEO from '@components/SEO';
import Question from '@components/Question';

import GameContext from '@context/game';

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  > * {
    margin: 8px;
  }
`;

const Menu = () => {
  return (
    <Layout>
      <SEO title="Level Select" keywords={[`javascript`, `questions`, `interview`]} />
      <h1>Select a level</h1>

      <GameContext.Consumer>
        {() => (
          <CardRow>
            <Link
              to='/game'
              state={{ level: 'beginner' }}
              >
              <Card
                content="Beginner"
                image="avatar-beginner"
              />
            </Link>
            <Link
              to='/game'
              state={{ level: 'intermediate' }}
              >
              <Card
                content="Intermediate"
                image="avatar-intermediate"
              />
            </Link>
            <Link
              to='/game'
              state={{ level: 'master' }}
              >
              <Card
                content="Master"
                image="avatar-master"
              />
            </Link>
          </CardRow>
        )}
      </GameContext.Consumer>
    </Layout>
  );
};

export default Menu;
