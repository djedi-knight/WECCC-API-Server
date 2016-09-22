/* global require */
/* global module  */

var express     = require('express');
var router      = express.Router();

// MODEL SETUP
// =============================================================================
var Page    = require('../models/page').model;

// ROUTES: /pages
// =============================================================================
router.route('/')

// GET
// -----------------------------------------------------------------------------
  .get(function(req, res) {
    Page.find(function(err, page) {
      if (err)
        res.send(err);

      res.json(page);
    });
  });

// ROUTES: /pages/:page_key
// =============================================================================
router.route('/:page_key')

// GET
// -----------------------------------------------------------------------------
  .get(function(req, res) {
    Page.findOne({ 'key': req.params.page_key }, function (err, page) {
      if (err)
        res.send(err);

      if (page) {
        res.json(page);
      } else {
        res.status(404).send({
          error: 'No page found for key: ' + req.params.page_key
        });
      }
    });
  });

module.exports = router;
