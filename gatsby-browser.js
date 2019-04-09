import React from 'react';

import { GameProvider } from '@context/game';

export const wrapRootElement = ({ element }) => (
  <GameProvider>{element}</GameProvider>
);
