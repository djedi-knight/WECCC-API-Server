var express = require('express');
var router  = express.Router();

// MODEL SETUP
// =============================================================================
var ScoreCard    = require('../models/scoreCard');

// ROUTES: /scoreCards
// =============================================================================
router.route('/')

// POST
// -----------------------------------------------------------------------------
  .post(function(req, res) {
    // create a new instance of the ScoreCard model
    var scoreCard = new ScoreCard();

    // set the ScoreCard properties
    scoreCard.title = req.body.title;
    scoreCard.score = req.body.score;

    // save the ScoreCard and check for errors
    scoreCard.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'ScoreCard created!' });
    });
  })

// GET
// -----------------------------------------------------------------------------
  .get(function(req, res) {
    ScoreCard.find(function(err, scoreCards) {
      if (err)
        res.send(err);

      res.json(scoreCards);
    });
  });

// ROUTES: /scoreCards/:scoreCard_id
// =============================================================================
router.route('/:scoreCard_id')

// GET
// -----------------------------------------------------------------------------
  .get(function(req, res) {
    ScoreCard.findById(req.params.scoreCard_id, function(err, scoreCard) {
      if (err)
        res.send(err);

      res.json(scoreCard);
    });
  })

// PUT
// -----------------------------------------------------------------------------
  .put(function(req, res) {
    // use our ScoreCard model to find the test we want
    ScoreCard.findById(req.params.scoreCard_id, function(err, scoreCard) {
      if (err)
        res.send(err);

        // update the ScoreCard properties
        scoreCard.title = req.body.title;
        scoreCard.score = req.body.score;

      // save the ScoreCard
      scoreCard.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'ScoreCard updated!' });
      });
    });
  })

// DELETE
// -----------------------------------------------------------------------------
  .delete(function(req, res) {
    ScoreCard.remove({
      _id: req.params.scoreCard_id
    }, function(err, scoreCard) {
      if (err)
        res.send(err);

      res.json({ message: 'ScoreCard successfully deleted' });
    });
  });

module.exports = router;
