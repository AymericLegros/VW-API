import { readdirSync } from 'fs'
import path from 'path'
import { merge } from 'lodash'

var basename = path.basename(__filename);
let resolvers = []

readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    let resolver = require(path.join(__dirname, file))
    resolvers.push(resolver.default)
  });

module.exports = merge(...resolvers)