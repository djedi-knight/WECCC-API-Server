/* global require */
/* global module  */

var mongoose = require('mongoose');

var InfoBoxSchema = new mongoose.Schema({
  key: { type: String, required: true },
  title: { type: String, required: true },
  value: { type: String, required: true }
});

module.exports = {
  schema: InfoBoxSchema,
  model: mongoose.model('InfoBox', InfoBoxSchema)
};
