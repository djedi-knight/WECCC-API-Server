var express = require('express');
var router  = express.Router();

// MIDDLEWARE SETUP
// =============================================================================
router.use(function(req, res, next) {
  console.log('logging information from custom middleware...');

  // make sure we go to the next routes and don't stop here
  next();
});

// ROUTES: /
// =============================================================================
router.get('/', function(req, res) {
  res.json({ message: 'Hooray! Welcome to our API!' });
});

module.exports = router;
