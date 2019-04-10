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
import { shuffle } from '@utils/array';

const CardRow = styled.div`
  display: flex;

  > div {
    margin: 8px;
  }
`;

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: [],
    };
  }

  async componentDidMount() {
    const { location } = this.props;

    const level = location && location.state && location.state.level;
    const subject = location && location.state && location.state.subject;
    if (!level && !subject) {
      navigate('/');
    }

    let module = null;
    let questions = null;
    if (subject) {
      const beginner = await import(`../../questions/beginner.js`);
      const intermediate = await import(`../../questions/intermediate.js`);
      const master = await import(`../../questions/master.js`);

      questions = [...beginner.default, ...intermediate.default, ...master.default]
        .filter(q => q.subjects.includes(subject));
    } else {
      const module = await import(`../../questions/${level}.js`);
      questions = module.default
    }

    questions = questions.slice(0, 10);

    this.setState({ questions });
  }

  render() {
    const { questions } = this.state;

    return (
      <GameContext.Consumer>
        {({ currentQuestion, setCurrentQuestion, score, setScore }) => (
          <Layout>
            <SEO title="Game On!" keywords={['javascript', 'questions', 'interview']} />
            <h1>
              Question {currentQuestion + 1} / {questions.length}
            </h1>

            {questions && (
              <Question
                {...questions[currentQuestion]}
                next={() => setCurrentQuestion(currentQuestion + 1)}
                onCorrect={() => setScore(score + 1)}
              />
            )}
          </Layout>
        )}
      </GameContext.Consumer>
    );
  }
}

export default Game;
