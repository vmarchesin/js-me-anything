import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '@layouts';
import Card from '@components/Card';
import SEO from '@components/SEO';

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
      <SEO
        title="Level Select"
        keywords={[`javascript`, `questions`, `interview`]}
      />
      <h1>Select a level</h1>

      <GameContext.Consumer>
        {({ setCurrentQuestion, setScore }) => {
          const resetQuestions = () => {
            setCurrentQuestion(0);
            setScore(0);
          };

          return (
            <CardRow>
              <Link to="/game" state={{ level: 'beginner' }}>
                <Card
                  content="Beginner"
                  image="avatar-beginner"
                  onClick={resetQuestions}
                />
              </Link>
              <Link to="/game" state={{ level: 'intermediate' }}>
                <Card
                  content="Intermediate"
                  image="avatar-intermediate"
                  onClick={resetQuestions}
                />
              </Link>
              <Link to="/game" state={{ level: 'master' }}>
                <Card
                  content="Master"
                  image="avatar-master"
                  onClick={resetQuestions}
                />
              </Link>
            </CardRow>
          );
        }}
      </GameContext.Consumer>
    </Layout>
  );
};

export default Menu;
