import React, { useState } from 'react';

const defaultState = {
  score: 0,
};

const Context = React.createContext(defaultState);

const ScoreProvider = ({ children }) => {
  const [score, setScore] = useState(defaultState.score);

  return (
    <Context.Provider
      value={{
        score,
        setScore,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;

export { ScoreProvider };
