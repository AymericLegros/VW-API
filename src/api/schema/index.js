import { makeExecutableSchema } from "apollo-server";

import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

// console.log(typeDefs)
// console.log(resolvers)

export default makeExecutableSchema({
  typeDefs,
  resolvers
})