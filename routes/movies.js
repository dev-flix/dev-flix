var express = require('express');
var router = express.Router();
var knex = require('../db')

//  /movies
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log(req.url);
  knex('movies')
    .where('id', req.params.id)
    .then( function (movies) {;
      res.render('movie-info', movies[0])
    })
});

module.exports = router;
