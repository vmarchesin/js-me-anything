import React from 'react';
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

  > div {
    margin: 8px;
  }
`;

const Menu = () => (
  <Layout>
    <SEO title="Level Select" keywords={[`javascript`, `questions`, `interview`]} />
    <h1>Select a level</h1>

    <GameContext.Consumer>
      {({ level, setLevel }) => (
        <CardRow>
          <Card
            content="Beginner"
            image="avatar-beginner"
            onClick={() => {
              setLevel('beginner');
              navigate('/');
            }}
          />
          <Card
            content="Intermediate"
            image="avatar-intermediate"
            onClick={() => {
              setLevel('intermediate');
              navigate('/');
            }}
          />
          <Card
            content="Master"
            image="avatar-master"
            onClick={() => {
              setLevel('intermediate');
              navigate('/');
            }}
          />
        </CardRow>
      )}
    </GameContext.Consumer>
  </Layout>
);

export default Menu;
