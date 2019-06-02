import React from 'react';

import { connect } from 'react-redux';
import { stopTimer } from '@redux/game/duck';
import { getTimeIsRunning } from '@redux/game/selectors';

import { Countdown } from './style';

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.interval = null;
    this.state = {
      currentQuestion: props.currentQuestion,
      time: props.countdownStartsAt,
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.countdown, 1000);
  }

  componentDidUpdate(prevProps) {
    const { currentQuestion, stopTimer, timeIsRunning } = this.props;
    const { time } = this.state;

    if (time === 0 && timeIsRunning) {
      stopTimer();
    }

    if (time === 0 || (this.interval && !timeIsRunning)) {
      clearInterval(this.interval);
    }

    if (prevProps.currentQuestion !== currentQuestion) {
      this.interval = setInterval(this.countdown, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  static getDerivedStateFromProps(props, state) {
    if (props.currentQuestion !== state.currentQuestion) {
      return {
        currentQuestion: props.currentQuestion,
        time: props.countdownStartsAt,
      };
    }

    return state;
  }

  countdown = () => {
    const { time } = this.state;
    this.setState({ time: time - 1 });
  };

  render() {
    const { countdownStartsAt, timeIsRunning } = this.props;
    const { time } = this.state;
    return (
      <Countdown
        animate={time !== 0 && timeIsRunning}
        countdownStartsAt={countdownStartsAt}
        time={time}
      >
        <div>{time}</div>
        <svg>
          <circle r="18" cx="20" cy="20" />
        </svg>
      </Countdown>
    );
  }
}

const stateToProps = state => ({
  timeIsRunning: getTimeIsRunning(state),
});

const dispatchToProps = dispatch => ({
  stopTimer: () => dispatch(stopTimer()),
});

export default connect(
  stateToProps,
  dispatchToProps
)(Timer);
