import React from 'react';
import Question from '@components/Question';

import GameContext from '@context/game';

import Finish from './finish';

const QuestionScreen = ({ questions }) => {
  if (!questions) {
    return null;
  }

  return (
    <GameContext.Consumer>
      {({ currentQuestion, setCurrentQuestion, score, setScore }) => {
        if (currentQuestion === questions.length) {
          return <Finish score={score} total={questions.length} />;
        }

        return (
          <React.Fragment>
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
          </React.Fragment>
        );
      }}
    </GameContext.Consumer>
  );
};

export default QuestionScreen;
