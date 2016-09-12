/* global global      */
/* global require     */
/* global describe    */
/* global before      */
/* global after       */
/* global beforeEach  */
/* global afterEach   */
/* global afterEach   */
/* global it          */

var chai = require('chai');
var expect = chai.expect;
var mongoose = require('mongoose');

var ScoreCard = require('../models/scoreCard').model;

describe("ScoreCard", function() {
  before(function(done) {
    var clearDB = function() {
      for (var item in mongoose.connection.collections) {
        mongoose.connection.collections[item].remove();
      }

      return done();
    };

    if (mongoose.connection.readyState === 0) {
      // Use native Node promises for Mongoose
      mongoose.Promise = global.Promise;
      // connect to test DB
      mongoose.connect('mongodb://localhost/test', function (err) {
        if (err) {
          throw err;
        }

        return clearDB();
      });
    } else {
      return clearDB();
    }

    return true;
  });

  after(function(done) {
    mongoose.disconnect();

    return done();
  });

  beforeEach(function(done) {
    var scoreCard = new ScoreCard({
      key: 'first',
      title: 'First ScoreCard',
      score: '8/10'
    });
    scoreCard.save(function() {
      done();
    });
  });

  afterEach(function(done) {
    ScoreCard.remove({}, function() {
      done();
    });
  });

  it("should successfully create a new scoreCard", function(done) {
    var scoreCard = new ScoreCard({
      key: 'second',
      title: 'Second ScoreCard',
      score: '8/10'
    });
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
      result.title = "New Title";
      result.save().then(function() {
        ScoreCard.find(function (err, result) {
          expect(result[0].title).to.equal("New Title");
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
