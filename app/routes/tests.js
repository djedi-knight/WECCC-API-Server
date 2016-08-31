var express = require('express');
var router  = express.Router();

// MODEL SETUP
// =============================================================================
var Test    = require('../models/test');

// ROUTES: /tests
// =============================================================================
router.route('/')

// POST
// -----------------------------------------------------------------------------
  .post(function(req, res) {
    // create a new instance of the Test model
    var test = new Test();

    // set the tests name (comes from the request)
    test.name = req.body.name;

    // save the test and check for errors
    test.save(function(err) {
      if (err)
        res.send(err);

      res.json({ message: 'Test created!' });
    });
  })

// GET
// -----------------------------------------------------------------------------
  .get(function(req, res) {
    Test.find(function(err, tests) {
      if (err)
        res.send(err);

      res.json(tests);
    });
  });

// ROUTES: /tests/:test_id
// =============================================================================
router.route('/:test_id')

// GET
// -----------------------------------------------------------------------------
  .get(function(req, res) {
    Test.findById(req.params.test_id, function(err, test) {
      if (err)
        res.send(err);

      res.json(test);
    });
  })

// PUT
// -----------------------------------------------------------------------------
  .put(function(req, res) {
    // use our test model to find the test we want
    Test.findById(req.params.test_id, function(err, test) {
      if (err)
        res.send(err);

      // update the test info
      test.name = req.body.name;

      // save the test
      test.save(function(err) {
        if (err)
          res.send(err);

        res.json({ message: 'Test updated!' });
      });
    });
  })

// DELETE
// -----------------------------------------------------------------------------
  .delete(function(req, res) {
    Test.remove({
      _id: req.params.test_id
    }, function(err, test) {
      if (err)
        res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });

module.exports = router;
