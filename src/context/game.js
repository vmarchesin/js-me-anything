import React, { useState } from 'react';

const defaultState = {
  level: null,
  score: 0,
};

const Context = React.createContext(defaultState);

const GameProvider = ({ children }) => {
  const [score, setScore] = useState(defaultState.score);
  const [level, setLevel] = useState(defaultState.level);

  return (
    <Context.Provider
      value={{
        level,
        setLevel,
        score,
        setScore,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;

export { GameProvider };
