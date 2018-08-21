import { ApolloServer } from 'apollo-server';

import schema from './api/schema'


// DEV ONLY
// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//   // SERVER DE FICHIER STATIC
//   const express = require('express');
//   const app = express()
//   app.use('/', express.static(__dirname + '/../assets'));
//   app.listen(4001)
// }

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ schema });

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen(process.env.PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});