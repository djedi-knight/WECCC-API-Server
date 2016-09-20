/* global require */
/* global module  */

var mongoose = require('mongoose');

var ReportSchema = new mongoose.Schema({
  key: { type: String, required: true },
  title: { type: String, required: true },
  data: [{
    indicator: { type: String },
    goal: { type: String },
    baseline: { type: String },
    change: { type: String },
    trend: { type: String, enum: ['UP', 'DOWN', 'NONE'] },
    colourCode: { type: String, enum: ['GREEN', 'YELLOW', 'RED'] }
  }]
});

module.exports = {
  schema: ReportSchema,
  model: mongoose.model('Report', ReportSchema)
};
