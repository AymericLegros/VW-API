import { readdirSync } from 'fs'
import path from 'path'

var basename  = path.basename(__filename);
let services  = {}

readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let serviceName = file.split('.')[0]
    serviceName = serviceName.charAt(0).toUpperCase() + serviceName.slice(1) + 'Service'
    let service = require(path.join(__dirname, file))
    services[serviceName] = service.default
  });

module.exports = services