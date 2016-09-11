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
var Page = require('../models/page');

describe("Page", function() {
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
    var page = new Page({
      key: 'first',
      title: 'First Page',
      scoreCards: [
        {
          key: 'first',
          title: 'First ScoreCard',
          score: '8/10'
        }
      ]
    });

    page.save(function() {
      done();
    });
  });

  afterEach(function(done) {
    Page.remove({}, function() {
      done();
    });
  });

  it("should successfully create a new page", function(done) {
    var page = new Page({
      key: 'second',
      title: 'Second Page',
      scoreCards: [
        {
          key: 'second',
          title: 'Second ScoreCard',
          score: '8/10'
        }
      ]
    });
    page.save().then(function() {
      Page.find(function (err, result) {
        expect(result).to.be.length(2);
      });
      done();
    });
  });

  it("should successfully return all pages", function(done) {
    Page.find(function (err, result) {
      expect(result).to.be.length(1);
      done();
    });
  });

  it("should successfully update a page", function(done) {
    Page.findOne(function (err, result) {
      result.title = "New Title";
      result.save().then(function() {
        Page.find(function (err, result) {
          expect(result[0].title).to.equal("New Title");
        });
        done();
      });
    });
  });

  it("should successfully delete a page", function(done) {
    Page.findOne(function (err, result) {
      result.remove().then(function() {
        expect(result).to.be.empty;
      });
      done();
    });
  });
});
