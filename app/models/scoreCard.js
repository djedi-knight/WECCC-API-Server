/* global require */
/* global module  */

var mongoose = require('mongoose');

var ScoreCardSchema = new mongoose.Schema({
  key: { type: String, required: true },
  title: { type: String, required: true },
  score: { type: String, required: true },
  trend: { type: String, required: false, enum: ['UP', 'DOWN', 'NONE'] },
  warning: { type: Boolean, default: false },
  peerScore: { type: String, required: false }
});

module.exports = {
  schema: ScoreCardSchema,
  model: mongoose.model('ScoreCard', ScoreCardSchema)
};
