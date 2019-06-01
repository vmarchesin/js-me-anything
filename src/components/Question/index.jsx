import React from 'react';
import styled from 'styled-components';
import { ifProp } from 'styled-tools';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { FaCheckCircle, FaTimesCircle, FaRegCircle } from 'react-icons/fa';

import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/dark';

import Button from '@components/Button';
import Timer from '@components/Timer';
import { colors } from '@layouts/theme';
import { parseAnswer, parseCode } from '@utils/parse';

SyntaxHighlighter.registerLanguage('javascript', js);

const StyledQuestion = styled.div`
  max-width: 100vw;
  padding: 8px;

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
    max-width: 800px;
    margin-top: 16px;
    line-height: 32px;

    > div > div {
      text-align: center;
    }

    pre {
      display: inline !important;
    }
  }

  .actions {
    display: flex;
    justify-content: center;
    margin-top: 16px;

    > * {
      margin: 0 8px;
    }
  }
`;

const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  max-width: 800px;

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
      background-color: #f3f3f3;
      border: 2px solid #bebebe;
      margin-left: 8px;

      border-radius: 8px;
      cursor: pointer;
    }
  }
`;

class Question extends React.PureComponent {
  constructor(props) {
    super(props);

    this.interval = null;
    this.countdownStartAt = 60;

    this.state = {
      time: this.countdownStartAt,
      timeIsRunning: true,
      showSolutions: false,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.countdown, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  countdown = () => {
    const { time } = this.state;
    this.setState({ time: time - 1 });
  };

  onAnswer = answer => {
    const { onCorrect } = this.props;
    const { showSolutions, time } = this.state;

    if (showSolutions) {
      return;
    }

    if (answer.isCorrect && time > 0) {
      onCorrect();
    }

    clearInterval(this.interval);
    this.setState({ showSolutions: true, timeIsRunning: false });
  };

  onNext = () => {
    const { next } = this.props;
    this.setState(
      {
        time: this.countdownStartAt,
        timeIsRunning: true,
        showSolutions: false,
      },
      () => {
        next();
        this.interval = setInterval(() => {
          const { time } = this.state;
          this.setState({ time: time - 1 });
        }, 1000);
      }
    );
  };

  render() {
    const {
      codeString,
      title,
      answers,
      explanation,
      explanationCodeString,
    } = this.props;

    const { showSolutions, time, timeIsRunning } = this.state;

    if (!title) {
      return null;
    }

    if (time <= 0 && timeIsRunning) {
      clearInterval(this.interval);
    }

    return (
      <StyledQuestion
        solutionsAreVisible={showSolutions ? 'visible' : undefined}
      >
        <Timer
          countdownStartAt={this.countdownStartAt}
          time={time}
          timeIsRunning={timeIsRunning}
        />
        <p>{title}</p>
        {codeString && (
          <SyntaxHighlighter language="javascript" style={dark}>
            {codeString}
          </SyntaxHighlighter>
        )}

        <Answers>
          {answers.map((answer, index) => (
            <div onClick={() => this.onAnswer(answer)} key={index}>
              <span style={{ verticalAlign: 'middle' }}>
                {showSolutions && answer.isCorrect ? (
                  <FaCheckCircle fill={colors.success} />
                ) : (
                  <FaTimesCircle fill={colors.error} />
                )}
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
          <Button className="hide-solution" onClick={() => this.onNext()}>
            NEXT
          </Button>
        </div>
      </StyledQuestion>
    );
  }
}

export default Question;
