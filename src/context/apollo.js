import ApolloClient, { InMemoryCache } from "apollo-boost";
import fetch from 'isomorphic-fetch';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache({
    dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}`: null),
  }),
  fetch,
});

export default client;