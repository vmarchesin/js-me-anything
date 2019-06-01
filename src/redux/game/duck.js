const initialState = {
  score: 0,
  currentQuestion: 0,
};

const SET_CURRENT_QUESTION = 'game/currentQuestion';
export function setCurrentQuestion(currentQuestion) {
  return {
    currentQuestion,
    type: SET_CURRENT_QUESTION,
  };
}

const SET_SCORE = 'game/setScore';
export function setScore(score) {
  return {
    score,
    type: SET_SCORE,
  };
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.currentQuestion,
      };
    case SET_SCORE:
      return {
        ...state,
        score: action.score,
      };
    default:
      return state;
  }
}
