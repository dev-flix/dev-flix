
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('movies').insert({title: 'Finding Nemo', genre: 'Family', classification: 'G', rating: 82 , minAge: 0}),
        knex('movies').insert({title: 'Shawshank Redemption', genre: 'Drama', classification: 'R18', rating: 93 , minAge: 18}),
        knex('movies').insert({title: 'Gladiator', genre: 'Action', classification: 'M15', rating: 85 , minAge: 15}),
        knex('movies').insert({title: 'Cinderella', genre: 'Family', classification: 'G', rating: 70 , minAge: 0})
      ])
    })
}
