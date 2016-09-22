/* global require */
/* global module  */

var express     = require('express');
var router      = express.Router();

// MODEL SETUP
// =============================================================================
var Report    = require('../models/report').model;

// ROUTES: /reports
// =============================================================================
router.route('/')

// GET
// -----------------------------------------------------------------------------
  .get(function(req, res) {
    Report.find(function(err, page) {
      if (err)
        res.send(err);

      res.json(page);
    });
  });

// ROUTES: /reports/:report_key
// =============================================================================
router.route('/:report_key')

// GET
// -----------------------------------------------------------------------------
  .get(function(req, res) {
    Report.findOne({ 'key': req.params.report_key }, function (err, report) {
      if (err)
        res.send(err);

      if (report) {
        res.json(report);
      } else {
        res.status(404).send({
          error: 'No report found for key: ' + req.params.report_key
        });
      }
    });
  });

module.exports = router;
