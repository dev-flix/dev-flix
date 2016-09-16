var express = require('express');
var router = express.Router();
var knex = require('../db')

//  /movies
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log(req.url);
  console.log("in movies info");
  knex('movies')
    .where('id', req.params.id)
    .then( function (movies) {
      console.log("movies  ", movies);
      res.render('movie-info', movies[0])
    })
});

module.exports = router;
