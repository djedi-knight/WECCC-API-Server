/* global require */
/* global module  */

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ScoreCardSchema = new Schema({
  title: String,
  score: String
});

module.exports = mongoose.model('ScoreCard', ScoreCardSchema);
