
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('movies', function (table) {
  table.increments('id').primary()
  table.string('title')
  table.string('genre')
  table.string('classification')
  table.integer('rating')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('movies')
}
