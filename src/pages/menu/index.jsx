import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from '@layouts';
import Loading from '@components/Loading';
import Card from '@components/Card';
import SEO from '@components/SEO';
import { Title } from '@components/_styled/Heading';

import { sortStrings } from '@utils/array';
import { capitalize } from '@utils/string';

import { connect } from 'react-redux';
import { resetGame } from '@redux/game/duck';

import { errorEvent, levelSelectEvent } from '@events/eventList';

import Contact from './contact';

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 32px;

  > * {
    margin: 8px;
  }
`;

function Menu({ startGame }) {
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
            data-level="beginner"
            content="Beginner"
            image="avatar-beginner"
            onClick={startGame}
          />
        </Link>
        <Link to="/game" state={{ level: 'intermediate' }}>
          <Card
            data-level="intermediate"
            content="Intermediate"
            image="avatar-intermediate"
            onClick={startGame}
          />
        </Link>
        <Link to="/game" state={{ level: 'master' }}>
          <Card
            data-level="master"
            content="Master"
            image="avatar-master"
            onClick={startGame}
          />
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
          if (loading) return <Loading />;
          if (error) {
            errorEvent('level_selector_loading', error);
            return <Contact />;
          }

          const { subjects } = data;

          return (
            <CardRow>
              {sortStrings(subjects).map(subject => (
                <Link to="/game" state={{ subject }} key={subject}>
                  <Card
                    data-level={subject}
                    content={capitalize(subject)}
                    onClick={startGame}
                  />
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
  startGame: e => {
    levelSelectEvent(e.currentTarget.dataset.level);
    dispatch(resetGame());
  },
});

export default connect(
  null,
  dispatchToProps
)(Menu);
