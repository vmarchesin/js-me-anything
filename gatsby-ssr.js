/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { Provider as ReduxProvider } from 'react-redux';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';

import client from '@graphql/client';
import rootReducer from '@redux/rootReducer';

const store = createStore(rootReducer);

// gatsby-ssr is required for build regardless if you plan to support SSR
export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  function ConnectedBody() {
    return (
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>{bodyComponent}</ReduxProvider>
      </ApolloProvider>
    );
  }

  replaceBodyHTMLString(renderToString(<ConnectedBody />));
};

export function wrapRootElement({ element }) {
  return (
    <ApolloProvider client={client}>
      <ReduxProvider store={store}>{element}</ReduxProvider>
    </ApolloProvider>
  );
}
