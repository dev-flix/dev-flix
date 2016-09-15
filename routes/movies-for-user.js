var express = require('express');
var router = express.Router();
var knex = require('../db')


/* GET users listing. */
router.get('/:id', function(req, res, next) {
  knex('users')
    .where('users.id', req.params.id)
    .join('movies', 'users.age', '>=', 'movies.minAge')
    .then( function (movies) {
      var name = movies[0].name ? movies[0].name : "This user doesn't have any movies"
      console.log("movies  ", movies);
      res.render('movies-for-user', {movies:movies, name:movies[0].name})
    })
});

module.exports = router;
