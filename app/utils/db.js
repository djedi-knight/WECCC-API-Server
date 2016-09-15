/* global global  */
/* global require */
/* global console */
/* global process */

// BASE SETUP
// =============================================================================

// call the packages/ data we need
var mongoose    = require('mongoose');
var mongodbUri  = require('mongodb-uri');
var fixtures    = require('pow-mongoose-fixtures');
var db          = require('../../config.json');

require('../models/scoreCard');

// Use native Node promises for Mongoose
mongoose.Promise = global.Promise;

// connect to our database
var uri = mongodbUri.format(db);
mongoose.connect(uri);
db = mongoose.connection;

// LOAD DATABASE
// =============================================================================

fixtures.load({
  ScoreCard: [
    { key: 'score1', title: 'Title', score: '8/10' }
  ]
}, db, function() {
  console.log('loading complete!');
  process.exit();
});
