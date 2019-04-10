import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FaCheckCircle, FaTimesCircle, FaRegCircle } from 'react-icons/fa'

import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';

import Button from '@components/Button';
import { colors } from '@layouts/theme';
import { parseCode } from '@utils/parse';

SyntaxHighlighter.registerLanguage('javascript', js);

const StyledQuestion = styled.div`
  max-width: 800px;

  p {
    text-align: center;
  }

  pre {
    max-width: 600px;
    margin: 0 auto 1.45rem auto;
  }

  .hide-solution {
    visibility: ${ifProp('solutionsAreVisible', 'visible', 'hidden')};
  }

  .explanation {
    margin-top: 16px;
    > div > div {
      text-align: center;
    }
  }

  .actions {
    display: flex;
    justify-content: center;

    > * {
      margin: 0 8px;
    }
  }
`;

const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > div {
    min-width: 50%;
    margin: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;

    > span {
      display: inline-block;
      margin-top: 4px;

      &.solution {
        margin-left: 8px;
      }
    }

    > div {
      display: inline-block;
      padding: 4px;
      background-color: #F3F3F3;
      border: 2px solid #BEBEBE;
      margin-left: 8px;

      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

const onAnswer = (answer, onCorrect, showSolutions, toggleSolutions) => {
  if (showSolutions) {
    return;
  } else if (answer.isCorrect) {
    onCorrect();
  }

  toggleSolutions(true);
};

const onNext = (next, toggleSolutions) => {
  toggleSolutions(false);
  next();
};

const Question = ({ codeString, title, answers, explanation, next, onCorrect }) => {
  if (!title) {
    return null;
  }

  const [showSolutions, toggleSolutions] = useState(false);

  return (
    <StyledQuestion
      solutionsAreVisible={showSolutions ? 'visible' : undefined}
    >
      <p>{title}</p>
      {codeString
        ? <SyntaxHighlighter language='javascript' style={dark}>{codeString}</SyntaxHighlighter>
        : null}

      <Answers>
        {answers.map((answer, index) => (
          <div
            onClick={() => onAnswer(answer, onCorrect, showSolutions, toggleSolutions)}
            key={index}
          >
            <span style={{ verticalAlign: 'middle' }}>
              {showSolutions
                ? answer.isCorrect
                  ? <FaCheckCircle fill={colors.success} />
                  : <FaTimesCircle fill={colors.error} />
                : <FaRegCircle />}
            </span>
            <div>
              {answer.value}
            </div>
          </div>
        ))}
      </Answers>

      <div
        className="hide-solution explanation"
        style={{ marginTop: 16 }}
      >
        {parseCode(explanation)}
      </div>

      <div className="actions">
        <Button className="hide-solution" onClick={() => onNext(next, toggleSolutions)}>
          Next
        </Button>
      </div>
    </StyledQuestion>
  );
};

Question.propTypes = {
  codeString: PropTypes.string,
  title: PropTypes.string,
  answers: PropTypes.array,
  next: PropTypes.func,
  onCorrect: PropTypes.func,
}

export default Question;
