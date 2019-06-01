/* eslint-disable no-underscore-dangle */
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import fetch from 'isomorphic-fetch';

const uri =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8004/graphql'
    : '/graphql';

const client = new ApolloClient({
  cache: new InMemoryCache({
    dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}` : null),
  }),
  fetch,
  uri,
});

export default client;
