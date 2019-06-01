import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from '@layouts';
import Card from '@components/Card';
import SEO from '@components/SEO';
import { Title } from '@components/_styled/Heading';

import { capitalize } from '@utils/string';

import { connect } from 'react-redux';
import { setCurrentQuestion, setScore } from '@redux/game/duck';

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;

  > * {
    margin: 8px;
  }
`;

function Menu({ resetGame }) {
  return (
    <Layout>
      <SEO
        title="Level Select"
        keywords={[`javascript`, `questions`, `interview`]}
      />
      <Title>Select a level</Title>

      <CardRow>
        <Link to="/game" state={{ level: 'beginner' }}>
          <Card
            content="Beginner"
            image="avatar-beginner"
            onClick={resetGame}
          />
        </Link>
        <Link to="/game" state={{ level: 'intermediate' }}>
          <Card
            content="Intermediate"
            image="avatar-intermediate"
            onClick={resetGame}
          />
        </Link>
        <Link to="/game" state={{ level: 'master' }}>
          <Card content="Master" image="avatar-master" onClick={resetGame} />
        </Link>
      </CardRow>

      <Title>or a subject</Title>
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

          const { subjects } = data;
          subjects.sort((a, b) =>
            a.toLowerCase().localeCompare(b.toLowerCase())
          );

          return (
            <CardRow>
              {subjects.map(subject => (
                <Link to="/game" state={{ subject }} key={subject}>
                  <Card content={capitalize(subject)} onClick={resetGame} />
                </Link>
              ))}
            </CardRow>
          );
        }}
      </Query>
    </Layout>
  );
}

const dispatchToProps = dispatch => ({
  resetGame: () => {
    dispatch(setCurrentQuestion(0));
    dispatch(setScore(0));
  },
});

export default connect(
  null,
  dispatchToProps
)(Menu);
