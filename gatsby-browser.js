import React from 'react';

import { ScoreProvider } from '@context/score';

export const wrapRootElement = ({ element }) => (
  <ScoreProvider>{element}</ScoreProvider>
);
