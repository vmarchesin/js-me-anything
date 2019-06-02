const initialState = {
  currentQuestion: 0,
  score: 0,
  timeIsRunning: true,
};

const INCREASE_SCORE = 'game/increaseScore';
export function increaseScore() {
  return {
    type: INCREASE_SCORE,
  };
}

const NEXT_QUESTION = 'game/nextQuestion';
export function nextQuestion() {
  return {
    type: NEXT_QUESTION,
  };
}

const RESET_GAME = 'game/resetGame';
export function resetGame() {
  return {
    type: RESET_GAME,
  };
}

const START_TIMER = 'game/startTimer';
export function startTimer() {
  return {
    type: START_TIMER,
  };
}

const STOP_TIMER = 'game/stopTimer';
export function stopTimer() {
  return {
    type: STOP_TIMER,
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
      };
    case INCREASE_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };
    case RESET_GAME:
      return {
        ...state,
        currentQuestion: 0,
        score: 0,
      };
    case START_TIMER:
      return {
        ...state,
        timeIsRunning: true,
      };
    case STOP_TIMER:
      return {
        ...state,
        timeIsRunning: false,
      };
    default:
      return state;
  }
}
