var express = require('express')
var router = express.Router()
var knex = require('../db')
var movies = require('../seeds/movies')

/* GET  /api/v1/movies*/
router.get('/all', function(req, res, next) {
  knex('movies')
    .select()
    .then( function (movies) {
      console.log(movies)
      // res.render('movie-info', movies[0])
    })
})

module.exports = router
