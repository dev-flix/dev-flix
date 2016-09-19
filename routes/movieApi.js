var express = require('express')
var router = express.Router()
var knex = require('../db')
var movies = require('../seeds/movies')

/* GET  /api/v1/movies*/
router.get('/all', function(req, res, next) {
  console.log('GET /api/v1/movies')
  knex('movies')
    .select()
    .then( function (movies) {
      console.log(movies)
      res.json(movies)
    })
})

module.exports = router
