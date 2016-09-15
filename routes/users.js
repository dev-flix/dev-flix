var express = require('express');
var router = express.Router();
var knex = require('../db')

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('HELLO WORLD');
  knex('users')
  .then( function (users) {
      res.render('users', {users:users} )
    })
});

module.exports = router;
