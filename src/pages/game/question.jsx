import React from 'react';
import Question from '@components/Question';
import Finish from '@pages/game/finish';

import { connect } from 'react-redux';
import { getCurrentQuestion, getScore } from '@redux/game/selectors';
import { increaseScore, nextQuestion } from '@redux/game/duck';

const QuestionScreen = ({
  currentQuestion,
  nextQuestion,
  score,
  increaseScore,
  questions,
}) => {
  if (!questions) {
    return null;
  }

  if (currentQuestion === questions.length) {
    return <Finish score={score} total={questions.length} />;
  }

  return (
    <React.Fragment>
      <h1>
        Question {currentQuestion + 1} / {questions.length}
      </h1>

      <Question
        {...questions[currentQuestion]}
        currentQuestion={currentQuestion}
        next={() => {
          nextQuestion();
          window.scrollTo(0, 0);
        }}
        onCorrect={increaseScore}
      />
    </React.Fragment>
  );
};

const stateToProps = state => ({
  currentQuestion: getCurrentQuestion(state),
  score: getScore(state),
});

const dispatchToProps = dispatch => ({
  nextQuestion: () => dispatch(nextQuestion()),
  increaseScore: () => dispatch(increaseScore()),
});

export default connect(
  stateToProps,
  dispatchToProps
)(QuestionScreen);
