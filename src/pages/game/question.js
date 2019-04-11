import React from 'react';
import Question from '@components/Question';

import GameContext from '@context/game';

const renderCompleteScreen = score => (
  <React.Fragment>
    <h1>Congratulations!</h1>
    <p>Score: {score}</p>
  </React.Fragment>
);

const QuestionScreen = ({
  questions,
}) => {
  if (!questions) {
    return null;
  }

  return (
    <GameContext.Consumer>
      {({ currentQuestion, setCurrentQuestion, score, setScore }) => {
        if (currentQuestion === questions.length) {
          return renderCompleteScreen(score);
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
