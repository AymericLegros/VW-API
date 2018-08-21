import { gql } from "apollo-server";

export default gql`
  type Update {
    title: String
    version: String
    link: String
    image: String
    date: String
  }

  input UpdateInput {
    title: String
    version: String
    link: String
    image: String
    date: String
  }

  extend type Query {
    toto: String
  }

  type Mutation {
    addUpdate(update: UpdateInput): Update
  }

  extend type Subscription {
    updateAdded: Update
  }
`