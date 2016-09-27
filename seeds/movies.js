exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('movies').del()
    .then(function() {
      return Promise.all([
        // Inserts seed entries
        knex('movies').insert({
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BZTAzNWZlNmUtZDEzYi00ZjA5LWIwYjEtZGM1NWE1MjE4YWRhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg",
          description: "After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
          title: 'Finding Nemo',
          genre: 'Family',
          classification: 'G',
          rating: 82,
          minAge: 0
        }),

        knex('movies').insert({
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SY1000_CR0,0,672,1000_AL_.jpg",
          description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          title: 'Shawshank Redemption',
          genre: 'Drama',
          classification: 'R18',
          rating: 93,
          minAge: 18
        }),

        knex('movies').insert({
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTgwMzQzNTQ1Ml5BMl5BanBnXkFtZTgwMDY2NTYxMTE@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
          description: "When a Roman general is betrayed and his family murdered by an emperor's corrupt son, he comes to Rome as a gladiator to seek revenge.",
          title: 'Gladiator',
          genre: 'Action',
          classification: 'M15',
          rating: 85,
          minAge: 15
        }),

        knex('movies').insert({
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxODYyODEzN15BMl5BanBnXkFtZTgwMDk4OTU0MzE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          description: "When her father unexpectedly passes away, young Ella finds herself at the mercy of her cruel stepmother and her scheming step-sisters. Never one to give up hope, Ella's fortunes begin to change after meeting a dashing stranger.",
          title: 'Cinderella',
          genre: 'Family',
          classification: 'G',
          rating: 70,
          minAge: 0
        }),

        knex('movies').insert({
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BODg0NjQ5ODQ3OF5BMl5BanBnXkFtZTcwNjU4MjkzNA@@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
          description: "A young boy is arrested by the U.S. Secret Service for writing a computer virus and is banned from using a computer until his 18th birthday. Years later, he and his new-found friends discover a plot to unleash a dangerous computer virus, but they must use their computer skills to find the evidence while being pursued by the Secret Service and the evil computer genius behind the virus.",
          title: 'Hackers',
          genre: 'Comedy, Crime, Drama',
          classification: 'PG-13',
          rating: 62,
          minAge: 13
        }),

        knex('movies').insert({
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BOTZiZmZiODktNjFlZC00YTczLWEzOWItMGY4MTY5YjJkZTY0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_CR0,0,666,1000_AL_.jpg",
          description: "A computer programmer's dream job at a hot Portland-based firm turns nightmarish when he discovers his boss has a secret and ruthless means of dispatching anti-trust problems.",
          title: 'Antitrust',
          genre: 'Action, Crime, Drama',
          classification: 'PG-13',
          rating: 61,
          minAge: 13
        }),

        knex('movies').insert({
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMDMyMmQ5YzgtYWMxOC00OTU0LWIwZjEtZWUwYTY5MjVkZjhhXkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SY1000_CR0,0,723,1000_AL_.jpg",
          description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
          title: 'The Matrix',
          genre: 'Action, Sci-Fi',
          classification: 'R',
          rating: 87,
          minAge: 16
        }),

        knex('movies').insert({
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU2NjA0NDk0NV5BMl5BanBnXkFtZTcwOTA0OTQzMw@@._V1_SY1000_CR0,0,621,1000_AL_.jpg",
          description: "A man decides to turn his moribund life around by winning back his ex-girlfriend, reconciling his relationship with his mother, and dealing with an entire community that has returned from the dead to eat the living.",
          title: 'Shaun of the Dead',
          genre: 'Comedy, Horror',
          classification: 'R',
          rating: 80,
          minAge: 16
        }),

        knex('movies').insert({
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTk3NjEwNDMzMF5BMl5BanBnXkFtZTgwMzgwNDgwNzE@._V1_.jpg",
          description: "Four weeks after a mysterious, incurable virus spreads throughout the UK, a handful of survivors try to find sanctuary.",
          title: '28 Days Later...',
          genre: ' Drama, Horror, Sci-Fi',
          classification: 'R',
          rating: 76,
          minAge: 16
        }),

        knex('movies').insert({
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA2Mzg2NDMzNl5BMl5BanBnXkFtZTgwMjcwODUzOTE@._V1_SY1000_SX675_AL_.jpg",
          description: "A young boy named Kubo must locate a magical suit of armor worn by his late father in order to defeat a vengeful spirit from the past.",
          title: 'Kubo and the Two Strings',
          genre: ' Animation, Adventure, Family',
          classification: 'PG',
          rating: 83,
          minAge: 0
        }),

        knex('movies').insert({
          image: "http://www.gstatic.com/tv/thumb/dvdboxart/22971/p22971_d_v8_aa.jpg",
          description: "History of Apple and Microsoft.",
          title: 'Pirates of Silicon Valley',
          genre: 'Biography, Drama',
          classification: 'PG',
          rating: 73,
          minAge: 10
        }),

        knex('movies').insert({
          image: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
          description: "After being held captive in an Afghan cave, a billionaire engineer creates a unique weaponized suit of armor to fight evil.",
          title: 'Iron Man',
          genre: 'Action',
          classification: 'M15',
          rating: 79,
          minAge: 15
        })

      ])
    })
}
