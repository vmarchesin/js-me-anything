const getGame = state => state.game;

export const getCurrentQuestion = state => getGame(state).currentQuestion;
export const getScore = state => getGame(state).score;
export const getTimeIsRunning = state => getGame(state).timeIsRunning;
