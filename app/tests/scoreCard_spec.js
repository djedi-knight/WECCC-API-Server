/* global global      */
/* global require     */
/* global describe    */
/* global before      */
/* global beforeEach  */
/* global afterEach   */
/* global afterEach   */
/* global it          */

var chai = require('chai');
var expect = chai.expect;
var mongoose = require('mongoose');
var ScoreCard = require('../models/scoreCard');

describe("ScoreCard", function() {
  before(function() {
    // Use native Node promises for Mongoose
    mongoose.Promise = global.Promise;
    // connect to test DB
    mongoose.connect('mongodb://localhost/test');
  });
  beforeEach(function(done) {
    var scoreCard = new ScoreCard({ title: 'First ScoreCard' });
    scoreCard.save(function () {
      done();
    });
  });
  afterEach(function(done) {
    ScoreCard.remove({}, function() {
      done();
    });
  });

  it("should successfully create a new scoreCard", function(done) {
    var scoreCard = new ScoreCard({ title: 'Second ScoreCard' });
    scoreCard.save().then(function() {
      ScoreCard.find(function (err, result) {
        expect(result).to.be.length(2);
      });
      done();
    });
  });

  it("should successfully return all scoreCards", function(done) {
    ScoreCard.find(function (err, result) {
      expect(result).to.be.length(1);
      done();
    });
  });

  it("should successfully update a scoreCard", function(done) {
    ScoreCard.findOne(function (err, result) {
      result.title = "New Test";
      result.save().then(function() {
        ScoreCard.find(function (err, result) {
          expect(result[0].title).to.equal("New Test");
        });
        done();
      });
    });
  });

  it("should successfully delete a scoreCard", function(done) {
    ScoreCard.findOne(function (err, result) {
      result.remove().then(function() {
        expect(result).to.be.empty;
      });
      done();
    });
  });
});
