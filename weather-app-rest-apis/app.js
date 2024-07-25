const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { graphqlHTTP } = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const { typeDefs, resolvers } = require('./src/schma');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// GraphQL schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

module.exports = app;
