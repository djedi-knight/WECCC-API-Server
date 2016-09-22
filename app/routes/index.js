/* global require */
/* global module  */

var express = require('express');
var router  = express.Router();

// MIDDLEWARE SETUP
// =============================================================================
router.use(function(req, res, next) {
  // set headers
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// ROUTES: /
// =============================================================================
router.get('/', function(req, res) {
  res.json({ message: 'Hooray! Welcome to our API!' });
});

module.exports = router;
