/* global require   */
/* global describe  */
/* global it        */


var sinon = require('sinon');
var chai = require('chai');
var expect = chai.expect;

require('mongoose');
require('sinon-mongoose');

var ScoreCard = require('../models/scoreCard');

describe("Get all scoreCards", function() {
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

  it("should return error if the action failed", function(done) {
    var ScoreCardMock = sinon.mock(ScoreCard);
    var expectedResult = {status: false, error: "Something went wrong"};
    ScoreCardMock.expects('find').yields(expectedResult, null);

    ScoreCard.find(function (err) {
      ScoreCardMock.verify();
      ScoreCardMock.restore();
      expect(err.status).to.not.be.true;
      done();
    });
  });
});

describe("Create a new scoreCard", function() {
  it("should create new scoreCard", function(done) {
    var ScoreCardMock = sinon.mock(new ScoreCard({ title: 'Title' }));
    var scoreCard = ScoreCardMock.object;
    var expectedResult = { status: true };
    ScoreCardMock.expects('save').yields(null, expectedResult);

    scoreCard.save(function (err, result) {
      ScoreCardMock.verify();
      ScoreCardMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });

  it("should return error if the action failed", function(done) {
    var ScoreCardMock = sinon.mock(new ScoreCard({ title: 'Title' }));
    var scoreCard = ScoreCardMock.object;
    var expectedResult = { status: false };
    ScoreCardMock.expects('save').yields(expectedResult, null);

    scoreCard.save(function (err) {
      ScoreCardMock.verify();
      ScoreCardMock.restore();
      expect(err.status).to.not.be.true;
      done();
    });
  });
});

describe("Update a scoreCard by id", function() {
  it("should update a scoreCard by id", function(done) {
    var ScoreCardMock = sinon.mock(new ScoreCard({ title: 'Title' }));
    var scoreCard = ScoreCardMock.object;
    var expectedResult = { status: true };
    ScoreCardMock.expects('save').withArgs({_id: 12345}).yields(null, expectedResult);

    scoreCard.save({_id: 12345}, function (err, result) {
      ScoreCardMock.verify();
      ScoreCardMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });

  it("should return error if the action failed", function(done) {
    var ScoreCardMock = sinon.mock(new ScoreCard({ title: 'Title' }));
    var scoreCard = ScoreCardMock.object;
    var expectedResult = { status: false };
    ScoreCardMock.expects('save').withArgs({_id: 12345}).yields(expectedResult, null);

    scoreCard.save({_id: 12345}, function (err) {
      ScoreCardMock.verify();
      ScoreCardMock.restore();
      expect(err.status).to.not.be.true;
      done();
    });
  });
});

describe("Delete a scoreCard by id", function(){
  it("should delete a scoreCard by id", function(done){
    var ScoreCardMock = sinon.mock(ScoreCard);
    var expectedResult = { status: true };
    ScoreCardMock.expects('remove').withArgs({_id: 12345}).yields(null, expectedResult);

    ScoreCard.remove({_id: 12345}, function (err, result) {
      ScoreCardMock.verify();
      ScoreCardMock.restore();
      expect(result.status).to.be.true;
      done();
    });
  });

  it("should return error if the action failed", function(done){
    var ScoreCardMock = sinon.mock(ScoreCard);
    var expectedResult = { status: false };
    ScoreCardMock.expects('remove').withArgs({_id: 12345}).yields(expectedResult, null);

    ScoreCard.remove({_id: 12345}, function (err) {
      ScoreCardMock.verify();
      ScoreCardMock.restore();
      expect(err.status).to.not.be.true;
      done();
    });
  });
});
