import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';

import client from '@graphql/client';
import rootReducer from '@redux/rootReducer';

const store = createStore(rootReducer);

export function wrapRootElement ({ element }) {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>
        {element}
      </ReduxProvider>
    </ApolloProvider>
  );
}
