var test = require('ava')
var util = require('util')
var _ = require('lodash')
var request = require('supertest-as-promised')

var knex = require('../db')
// var Model = require('../lib/model')
// var movieData = require('../seeds/test-db')
// var config = {directory: '../db/migrations'}
var app = require('../app')

test.beforeEach(function () {
  console.log('migrating...')
  // ava methods can return a promise and end automatically when the promise resolves
  return knex.migrate.latest() // create the tables on the test database
    .then(function () {
      return knex.seed.run()
    })
})

// drop the tables on the test database
test.afterEach.always(function () {
  console.log('rolling back...')
  return knex.migrate.rollback()
})

test('GET /movies', t => {
  return request(app)
    .get('/api/v1/movies/all')
    .expect(200)
    .then(function (res) {
      t.is(typeof res.body.length, 'number')
    })
})

// connect Model to the database
// Model.knex(knex)
// var tableName = 'movies'
//
// // inherit from the Model prototype
// function Person () {
//   Model.apply(this, arguments)
// }
// util.inherits(Person, Model)
// //Person.prototype = Object.create(Model)
// //Person.prototype.constructor = Person
//
// // give Person methods
// Model.extend(Person)
//
// // connect Person to the 'person' table
// Person.tableName(tableName)
//
// // these run before and after each test,
// // ensuring that the test database is a known quantity
// test.beforeEach(function () {
//   console.log('migrating...')
//   // ava methods can return a promise and end automatically when the promise resolves
//   return knex.migrate.latest(config) // create the tables on the test database
//     .then(function () {
//       return knex.seed.run()
//     })
// })
// //
// // drop the tables on the test database
// test.afterEach.always(function () {
//   console.log('rolling back...')
//   return knex.migrate.rollback(config)
// })
//
// // Subconstructor tests
// test('Subconstructor.all() gets all rows', function (t) {
//   return Person.all()
//     .then(function (people) {
//       t.is(people.length, peopleData.length)
//     })
// })
//
// test('Subconstructor.destroy() deletes a row from the database', function (t) {
//   var testPerson = {name: 'Effie Trinket', email: 'effie@thecapitol.com'}
//   t.is(typeof Person.destroy, 'function')
//
//   return knex(tableName)
//     .insert(testPerson) // insert a row into the database
//     .then(function (ids) {
//       console.log('ids', ids)
//       return Person.destroy(testPerson)
//     })
//     .then(function (deleteCount) {
//       // destroy resolves with the id of the destroyed row
//       t.is(typeof deleteCount, 'number')
//
//       // let's check the database
//       return knex(tableName)
//         .where(testPerson)
//         .select('*')
//     })
//     .then(function (people) {
//       console.log('people', people)
//       t.is(people.length, 0)
//     })
// })
//
//
// // instance tests
// test('instance.save() saves a model instance in the database', function (t) {
//   var data = {
//     name: 'Selina Kyle',
//     email: 'selina@ilovecats.com'
//   }
//
//   var person = new Person(data)
//   t.is(typeof person.save, 'function')
//
//   return person
//     .save()
//     .then(function (createdPerson) {
//       // assertions
//       t.true(createdPerson instanceof Person)
//       t.is(typeof createdPerson.id, 'number')
//
//       // ok it resolves with a Person with an id
//       // but has it really been inserted into the database ?
//       return knex(tableName)
//         .where('id', createdPerson.id)
//         .select('*')
//     })
//     .then(function (people) {
//       var fetchedPerson = people[0]
//       t.truthy(fetchedPerson)
//
//       _.each(data, function (value, key) {
//         t.is(fetchedPerson[key], value)
//       })
//     })
// })
//
// test('instance.update() updates a row in the database', function (t) {
//   var personId = 1
//   var update = {email: 'test@test.com'}
//
//   return knex('person')
//     .select()
//     .where('id', personId)
//     .then(function (people) {
//       var person = new Person(people[0])
//       return person.update(update)
//     })
//     .then(function (updatedPerson) {
//       return knex('person')
//         .select()
//         .where('id', personId)
//     })
//     .then(function (people) {
//       var updatedPerson = people[0]
//
//       t.is(updatedPerson.email, update.email)
//     })
// })
