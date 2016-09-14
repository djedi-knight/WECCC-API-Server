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

var Report = require('../models/page').model;

describe("Report", function() {
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
    var report = new Report({
      key: 'report1',
      title: 'First Report',
      data: [{
        title: 'First Indicator',
        goal: 'A+',
        baseline: 'C',
        change: '+5%',
        trend: 'UP',
        colourCode: 'GREEN'
      }]
    });

    report.save(function() {
      done();
    });
  });

  afterEach(function(done) {
    Report.remove({}, function() {
      done();
    });
  });

  it("should successfully create a new report", function(done) {
    var report = new Report({
      key: 'report2',
      title: 'Second Report',
      data: [{
        title: 'First Indicator',
        goal: 'A+',
        baseline: 'C',
        change: '+5%',
        trend: 'UP',
        colourCode: 'GREEN'
      }]
    });

    report.save(function(err, _result) {
      expect(err).to.be.null;
      done();
    });
  });

  it("should successfully return all reports", function(done) {
    Report.find(function (err, result) {
      expect(result).to.be.length(1);
      done();
    });
  });

  it("should successfully update a report", function(done) {
    Report.findOne(function (err, result) {
      result.title = "New Title";
      result.save(function(err, _result) {
        expect(err).to.be.null;
        done();
      });
    });
  });

  it("should successfully delete a report", function(done) {
    Report.findOne(function (err, result) {
      result.remove(function(err, _result) {
        expect(err).to.be.null;
        done();
      });
    });
  });
});
