var express = require('express');
var router = express.Router();
var knex = require('../db')

//  /users
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('HELLO WORLD');
  knex('users')
  .then( function (users) {
      res.render('users', {users:users} )
    })
});

router.get('/:id/movies', function(req, res, next) {
    console.log(req.url);
  var id = req.params.id

  knex('users')
    .where('users.id', req.params.id)
    .join('movies', 'users.age', '>=', 'movies.minAge')
    .then( function (movies) {
      
      // var name = movies[0].name ? movies[0].name : "This user doesn't have any movies"
      var name = "This user doesn't have any movies"
      if(movies) {
        name = movies[0].name
      }
      res.render('movies-for-user', {id:movies.id, movies:movies, name:name})
    })
});

module.exports = router;
