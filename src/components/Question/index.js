import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ifProp, ifNotProp } from 'styled-tools';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';

import Button from '@components/Button';
import { shuffle } from '@utils/array';

SyntaxHighlighter.registerLanguage('javascript', js);

const StyledQuestion = styled.div`
  .hide-solution {
    visibility: ${ifProp('solutionsAreVisible', 'visible', 'hidden')};
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

    > span {
      display: inline;

      &.solution {
        margin-left: 8px;
      }
    }

    > div {
      display: inline;
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

const renderSolution = isCorrect => (
  <span className="hide-solution">
    {isCorrect ? 'T' : 'F'}
  </span>
);

const Question = ({ hasCode, codeString, title, answers, explanation, next, onCorrect }) => {
  if (!title) {
    return null;
  }
  const [showSolutions, toggleSolutions] = useState(false);

  return (
    <StyledQuestion
      solutionsAreVisible={showSolutions ? 'visible' : undefined}
    >
      <p>{title}</p>
      {hasCode
        ? <SyntaxHighlighter language='javascript' style={dark}>{codeString}</SyntaxHighlighter>
        : null}

      <Answers>
        {answers.map((answer, index) => (
          <div
            onClick={() => onAnswer(answer, onCorrect, showSolutions, toggleSolutions)}
            key={index}
          >
            <span>{index})</span>
            <div>
              {answer.value}
            </div>
            {renderSolution(answer.isCorrect, showSolutions)}
          </div>
        ))}
      </Answers>

      <p className="hide-solution">{explanation}</p>

      <Button className="hide-solution" onClick={next}>
        Next
      </Button>
    </StyledQuestion>
  );
};

Question.propTypes = {
  codeString: PropTypes.string,
  hasCode: PropTypes.bool,
  title: PropTypes.string,
  answers: PropTypes.array,
  next: PropTypes.func,
  onCorrect: PropTypes.func,
}

export default Question;
