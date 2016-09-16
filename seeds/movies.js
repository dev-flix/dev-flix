
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('movies').insert({image: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg", description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.", title: 'Finding Nemo', genre: 'Family', classification: 'G', rating: 82 , minAge: 0}),
        knex('movies').insert({image: "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", title: 'Shawshank Redemption', genre: 'Drama', classification: 'R18', rating: 93 , minAge: 18}),
        knex('movies').insert({image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwMzQzNTQ1Ml5BMl5BanBnXkFtZTgwMDY2NTYxMTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg", description: "When a Roman general is betrayed and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge.", title: 'Gladiator', genre: 'Action', classification: 'M15', rating: 85 , minAge: 15}),
        knex('movies').insert({image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxODYyODEzN15BMl5BanBnXkFtZTgwMDk4OTU0MzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her scheming step-sisters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger.", title: 'Cinderella', genre: 'Family', classification: 'G', rating: 70 , minAge: 0}),
        knex('movies').insert({image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "After being held captive in an Afghan cave, a billionaire engineer creates a unique weaponized suit of armor to fight evil.", title: 'Finding Nemo', genre: 'Action', classification: 'M15', rating: 79 , minAge: 15}),
        knex('movies').insert({image: "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg", description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.", title: 'Shawshank Redemption', genre: 'Drama', classification: 'R18', rating: 93 , minAge: 18}),
        knex('movies').insert({image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwMzQzNTQ1Ml5BMl5BanBnXkFtZTgwMDY2NTYxMTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg", description: "When a Roman general is betrayed and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge.", title: 'Gladiator', genre: 'Action', classification: 'M15', rating: 85 , minAge: 15}),
        knex('movies').insert({image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxODYyODEzN15BMl5BanBnXkFtZTgwMDk4OTU0MzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her scheming step-sisters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger.", title: 'Cinderella', genre: 'Family', classification: 'G', rating: 70 , minAge: 0})

      ])
    })
}
