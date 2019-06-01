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
    answers: [Answer]!
    explanation: String
    explanationCodeString: String
  }

  type Query {
    questions(level: String, subject: String): [Question]
    subjects: [String]
  }
`;

const resolvers = {
  Query: {
    questions: (parent, { level, subject }) =>
      questions
        .filter(q => !level || q.level === level)
        .filter(q => !subject || q.subjects.includes(subject))
        .slice(0, 10),
    subjects: () => [
      ...new Set(questions.map(q => q.subjects).flatMap(q => q)),
    ],
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

const app = express();
server.applyMiddleware({ app, path: '*' });

// Only uncomment the lines below if you intend to use the graphql playground
// const PORT = 8004;
// app.listen(PORT, () => console.log(`🚀  Server ready at http://localhost:${PORT}`))

module.exports = app;
