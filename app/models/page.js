/* global require */
/* global module  */

var mongoose  = require('mongoose');
var scoreCard = require('../models/scoreCard').schema;

var PageSchema = new mongoose.Schema({
  key: { type: String, required: true, index: { unique: true } },
  title: { type: String, required: true },
  scoreCards: [scoreCard]
});

module.exports = mongoose.model('Page', PageSchema);
