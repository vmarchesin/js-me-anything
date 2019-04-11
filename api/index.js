const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const questions = require('./questions');

const typeDefs = gql`
  type Answer {
    id: ID!
    value: String
    isCorrect: Boolean
  }

  type Question {
    id: ID!
    codeString: String
    level: String!
    subjects: [String]
    title: String!
    answers: [Answer]!,
    explanation: String
  }

  type Query {
    questions(level: String, subject: String): [Question]
  }
`;

const resolvers = {
  Query: {
    questions: (parent, { level, subject }) => questions
        .filter(q => !level || q.level === level)
        .filter(q => !subject || q.subjects.includes(subject))
        .slice(0, 10),
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
  formatError: error => {
    console.log(error);
    return error;
  },
  formatResponse: response => {
    console.log(response);
    return response;
  },
});

const app = express();
server.applyMiddleware({ app, path: '*' });

module.exports = app;
