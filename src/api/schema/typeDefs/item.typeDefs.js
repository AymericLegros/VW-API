import { gql } from "apollo-server";

export default gql`
  type Item {
    name: String
    uniqueName: String
    description: String
    category: String
    imageName: String
    data: JSON
  }

  extend type Query {
    getOneItemBy(filter: JSON): Item
    import: String
  }
`