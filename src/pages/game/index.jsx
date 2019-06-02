import React from 'react';
import { navigate } from 'gatsby';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Layout from '@layouts';
import SEO from '@components/SEO';
import { shuffle } from '@utils/array';

import Question from './question';

export default class extends React.Component {
  constructor(props) {
    super(props);

    const { location } = props;
    const level = location && location.state && location.state.level;
    const subject = location && location.state && location.state.subject;

    this.state = {
      level: level || '',
      subject: subject || '',
    };
  }

  componentDidMount() {
    const { level, subject } = this.state;

    if (!level && !subject) {
      navigate('/');
    }
  }

  render() {
    const { level, subject } = this.state;

    return (
      <Layout>
        <SEO
          title="Game On!"
          keywords={['javascript', 'questions', 'interview']}
        />
        <Query
          variables={{ level, subject }}
          query={gql`
            query Question($level: String, $subject: String) {
              questions(level: $level, subject: $subject) {
                codeString
                title
                level
                subjects
                explanation
                explanationCodeString
                answers {
                  id
                  value
                  isCorrect
                }
              }
            }
          `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;

            const questions = shuffle(
              data.questions.map(q => ({ ...q, answers: shuffle(q.answers) }))
            );

            return <Question questions={questions} />;
          }}
        </Query>
      </Layout>
    );
  }
}
