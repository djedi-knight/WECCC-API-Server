/* global require */
/* global module  */

var express = require('express');
var router  = express.Router();

// MIDDLEWARE SETUP
// =============================================================================
router.use(function(req, res, next) {
  // make sure we go to the next routes and don't stop here
  next();
});

// ROUTES: /
// =============================================================================
router.get('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'Hooray! Welcome to our API!' });
});

module.exports = router;
