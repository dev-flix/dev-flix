var testData = require('../test-db')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
        return knex('movies').insert(testData)
    })
}
