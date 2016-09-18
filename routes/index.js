var express = require('express');
var router = express.Router();
var knex = require('../db')
var movies = require('../seeds/movies')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/users')
  knex('movies')
    .select()
    .then( function (movies) {
      console.log(movies);
      // res.render('movie-info', movies[0])
    })
});

module.exports = router;
