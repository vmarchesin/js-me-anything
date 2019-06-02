import React, { useState } from 'react';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FaCheckCircle, FaTimesCircle, FaRegCircle } from 'react-icons/fa';
import { connect } from 'react-redux';

import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';

import Badge from '@components/Badge';
import Button from '@components/Button';
import Timer from '@components/Timer';
import { colors } from '@layouts/theme';
import { capitalize } from '@utils/string';
import { parseAnswer, parseCode, parseQuestion } from '@utils/parse';

import { startTimer, stopTimer } from '@redux/game/duck';
import { getTimeIsRunning } from '@redux/game/selectors';

import { StyledQuestion, Answers, Badges } from './style';

SyntaxHighlighter.registerLanguage('javascript', js);

const onAnswer = (
  answer,
  showSolutions,
  timeIsRunning,
  onCorrect,
  toggleSolutions,
  stopTimer
) => {
  if (timeIsRunning) {
    stopTimer();
  }

  if (showSolutions) {
    return;
  }

  if (answer.isCorrect && timeIsRunning) {
    onCorrect();
  }

  toggleSolutions(true);
};

const onNext = (toggleSolutions, next, startTimer) => {
  toggleSolutions(false);
  next();
  startTimer();
};

function Question({
  onCorrect,
  startTimer,
  stopTimer,
  timeIsRunning,

  codeString,
  currentQuestion,
  title,
  answers,
  explanation,
  explanationCodeString,
  subjects,
  next,
}) {
  const [showSolutions, toggleSolutions] = useState(false);

  if (!title) {
    return null;
  }

  return (
    <StyledQuestion solutionsAreVisible={showSolutions ? 'visible' : undefined}>
      <Timer currentQuestion={currentQuestion} countdownStartsAt={60} />
      <p className="inline-code">{parseQuestion(title)}</p>
      {codeString && (
        <SyntaxHighlighter language="javascript" style={dark}>
          {codeString}
        </SyntaxHighlighter>
      )}
      <Badges>
        {subjects.map(subject => (
          <Badge key={subject}>{capitalize(subject)}</Badge>
        ))}
      </Badges>

      <Answers>
        {answers.map(answer => (
          <div
            onClick={() =>
              onAnswer(
                answer,
                showSolutions,
                timeIsRunning,
                onCorrect,
                toggleSolutions,
                stopTimer
              )
            }
            key={answer.id}
          >
            <span style={{ verticalAlign: 'middle' }}>
              {showSolutions &&
                (answer.isCorrect ? (
                  <FaCheckCircle fill={colors.success} />
                ) : (
                  <FaTimesCircle fill={colors.error} />
                ))}
              {!showSolutions && <FaRegCircle />}
            </span>
            <div>{parseAnswer(answer.value)}</div>
          </div>
        ))}
      </Answers>

      <div className="hide-solution explanation" style={{ marginTop: 16 }}>
        {parseCode(explanation)}
      </div>

      <div className="hide-solution" style={{ marginTop: 16 }}>
        {explanationCodeString ? (
          <SyntaxHighlighter language="javascript" style={dark}>
            {explanationCodeString}
          </SyntaxHighlighter>
        ) : null}
      </div>

      <div className="actions">
        <Button
          className="hide-solution"
          onClick={() => onNext(toggleSolutions, next, startTimer)}
        >
          NEXT
        </Button>
      </div>
    </StyledQuestion>
  );
}

const stateToProps = state => ({
  timeIsRunning: getTimeIsRunning(state),
});

const dispatchToProps = dispatch => ({
  startTimer: () => dispatch(startTimer()),
  stopTimer: () => dispatch(stopTimer()),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Question);
