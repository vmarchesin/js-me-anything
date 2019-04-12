import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from '@layouts';
import Card from '@components/Card';
import SEO from '@components/SEO';
import { Title } from '@components/_styled/Heading';

import GameContext from '@context/game';
import { capitalize } from '@utils/string';

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;

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
      <Title>Select a level</Title>

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

      <Title>or a subject</Title>

      <GameContext.Consumer>
        {({ setCurrentQuestion, setScore }) => {
          const resetQuestions = () => {
            setCurrentQuestion(0);
            setScore(0);
          };

          return (
            <Query
              query={gql`
                {
                  subjects
                }
              `}
            >
              {({ loading, error, data }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error :(</p>;

                const subjects = data.subjects;
                subjects.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

                return (
                  <CardRow>
                    {subjects.map(subject => (
                      <Link to="/game" state={{ subject }} key={subject}>
                        <Card
                          content={capitalize(subject)}
                          onClick={resetQuestions}
                        />
                      </Link>
                    ))}
                  </CardRow>
                )
              }}
            </Query>
          )
        }}
      </GameContext.Consumer>
    </Layout>
  );
};

export default Menu;
