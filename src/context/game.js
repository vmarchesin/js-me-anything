import React, { useState } from 'react';

const defaultState = {
  currentQuestion: 0,
  score: 0,
};

const Context = React.createContext(defaultState);

const GameProvider = ({ children }) => {
  const [score, setScore] = useState(defaultState.score);
  const [currentQuestion, setCurrentQuestion] = useState(
    defaultState.currentQuestion
  );

  return (
    <Context.Provider
      value={{
        currentQuestion,
        setCurrentQuestion,
        score,
        setScore,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;

export { GameProvider };
