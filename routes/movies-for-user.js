var express = require('express');
var router = express.Router();
var knex = require('../db')


/* GET users listing. */
router.get('/:id', function(req, res, next) {
  knex('users')
    .where('users.id', req.params.id)
    .join('movies', 'users.age', '>=', 'movies.minAge')
    .then( function (movies){
      console.log(movies);
      res.render('movies-for-user', {movies:movies})
    })
});

module.exports = router;
