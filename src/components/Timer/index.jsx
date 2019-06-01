import React from 'react';
import styled, { css } from 'styled-components';
import { ifProp, prop } from 'styled-tools';
import { colors } from '@layouts/theme';

const Countdown = styled.div`
  @keyframes countdown {
    from {
      stroke-dashoffset: 0px;
    }
    to {
      stroke-dashoffset: 113px;
    }
  }

  position: absolute;
  top: 100px;
  right: 20px;
  margin: auto;
  margin-top: 20px;
  height: 40px;
  width: 40px;
  text-align: center;

  > div {
    display: inline-block;
    line-height: 40px;
  }

  > svg {
    position: absolute;
    top: 0;
    right: 0;
    width: 40px;
    height: 40px;
    transform: rotateY(-180deg) rotateZ(-90deg);

    > circle {
      stroke-dasharray: 113px;
      stroke-dashoffset: 0px;
      stroke-linecap: round;
      stroke-width: 4px;
      stroke: ${({ time }) => {
        if (time <= 5) {
          return colors.error;
        }
        if (time > 5 && time < 20) {
          return colors.warning;
        }

        return colors.success;
      }};
      fill: none;
      ${ifProp(
        'animate',
        css`
          animation: countdown ${prop('countdownStartAt')}s linear infinite
            forwards;
        `
      )}
    }
  }
`;

const Timer = ({ countdownStartAt, time, timeIsRunning }) => (
  <Countdown
    animate={time !== 0 && timeIsRunning}
    countdownStartAt={countdownStartAt}
    time={time}
  >
    <div>{time <= 0 ? 0 : time}</div>
    <svg>
      <circle r="18" cx="20" cy="20" />
    </svg>
  </Countdown>
);

export default Timer;
