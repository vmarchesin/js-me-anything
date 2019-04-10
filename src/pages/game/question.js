import React from 'react';
import Question from '@components/Question';

const QuestionScreen = ({ questions, currentQuestion, score, setCurrentQuestion, setScore }) => {
  if (!questions) {
    return null;
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
};

export default QuestionScreen;