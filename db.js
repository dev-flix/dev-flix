var Knex = require('knex')
var knex = Knex(require('./knexfile')[process.env.NODE_ENV || 'development'])

module.exports = knex
