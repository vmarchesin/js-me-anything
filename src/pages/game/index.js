import React from 'react';
import { navigate } from 'gatsby';

import Layout from '@layouts';
import SEO from '@components/SEO';
import GameContext from '@context/game';
import { shuffle } from '@utils/array';

import Question from './question';

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

    let questions = null;
    if (subject) {
      const beginner = await import(`../../questions/beginner.js`);
      const intermediate = await import(`../../questions/intermediate.js`);
      const master = await import(`../../questions/master.js`);

      questions = [
        ...beginner.default,
        ...intermediate.default,
        ...master.default,
      ].filter(q => q.subjects.includes(subject));
    } else if (level) {
      const module = await import(`../../questions/${level}.js`);
      questions = module.default;
    } else {
      questions = [];
    }

    questions = shuffle(questions.slice(0, 10));
    questions = questions.map(q => ({ ...q, answers: shuffle(q.answers) }));

    this.setState({ questions });
  }

  renderCompleteScreen = score => (
    <React.Fragment>
      <h1>Congratulations!</h1>
      <p>Score: {score}</p>
    </React.Fragment>
  );

  renderQuestion = (
    questions,
    currentQuestion,
    score,
    setCurrentQuestion,
    setScore
  ) => (
    <Question
      questions={questions}
      currentQuestion={currentQuestion}
      score={score}
      setCurrentQuestion={setCurrentQuestion}
      setScore={setScore}
    />
  );

  render() {
    const { questions } = this.state;

    return (
      <GameContext.Consumer>
        {({ currentQuestion, setCurrentQuestion, score, setScore }) => (
          <Layout>
            <SEO
              title="Game On!"
              keywords={['javascript', 'questions', 'interview']}
            />
            {currentQuestion === questions.length
              ? this.renderCompleteScreen(score)
              : this.renderQuestion(
                  questions,
                  currentQuestion,
                  score,
                  setCurrentQuestion,
                  setScore
                )}
          </Layout>
        )}
      </GameContext.Consumer>
    );
  }
}

export default Game;
