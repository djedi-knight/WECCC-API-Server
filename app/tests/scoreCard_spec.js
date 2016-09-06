var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

var mongoose = require('mongoose');
require('sinon-mongoose');

var ScoreCard = require('../models/scoreCard');

describe("ScoreCard", function() {
  it("should return all scoreCards", function(done) {
    var ScoreCardMock = sinon.mock(ScoreCard);
    var expectedResult = {status: true, scoreCard: []};

    ScoreCardMock.expects('find').yields(null, expectedResult);
    ScoreCard.find(function (err, result) {
      ScoreCardMock.verify();
      ScoreCardMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });

  it("should return error", function(done) {
    var ScoreCardMock = sinon.mock(ScoreCard);
    var expectedResult = {status: false, error: "Something went wrong"};

    ScoreCardMock.expects('find').yields(expectedResult, null);
    ScoreCard.find(function (err, result) {
      ScoreCardMock.verify();
      ScoreCardMock.restore();
      expect(err.status).to.not.be.true;
      done();
    });
  });
});
