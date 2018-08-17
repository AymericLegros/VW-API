import { readdirSync } from 'fs'
import path from 'path'
import { gql } from 'apollo-server'

var basename = path.basename(__filename)
let typeDefs = []
const dafaultTypeDefs = gql`
  type Query
`
typeDefs.push(dafaultTypeDefs)

readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    let typeDef = require(path.join(__dirname, file))
    typeDefs.push(typeDef.default)
  })

module.exports = typeDefs