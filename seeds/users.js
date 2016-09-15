
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({name: 'Brady', age:22 }),
        knex('users').insert({name: 'Lisa', age:18 }),
        knex('users').insert({name: 'Steve', age:12 })
      ])
    })
}
