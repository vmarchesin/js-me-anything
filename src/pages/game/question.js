import React from 'react';
import Question from '@components/Question';

import Finish from './finish';

import { connect } from 'react-redux'
import { getCurrentQuestion, getScore } from '@redux/game/selectors'
import { setCurrentQuestion, setScore } from '@redux/game/duck'

const QuestionScreen = ({ currentQuestion, setCurrentQuestion, score, setScore, questions }) => {
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
        next={() => {
          setCurrentQuestion(currentQuestion + 1);
          window && window.scrollTo(0, 0);
        }}
        onCorrect={() => setScore(score + 1)}
      />
    </React.Fragment>
  );
};

const stateToProps = (state) => ({
  currentQuestion: getCurrentQuestion(state),
  score: getScore(state),
})

const dispatchToProps = (dispatch) => ({
  setCurrentQuestion: (question) => dispatch(setCurrentQuestion(question)),
  setScore: (score) => dispatch(setScore(score)),
})

export default connect(stateToProps, dispatchToProps)(QuestionScreen);
