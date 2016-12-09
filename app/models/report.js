/* global require */
/* global module  */

var mongoose = require('mongoose');

var ProgressReportSchema = new mongoose.Schema({
  key: { type: String, required: true },
  title: { type: String, required: true },
  data: [{
    header: { type: String },
    rows: [{
      indicator: { type: String },
      goal: { type: String },
      baseline: { type: String },
      change: { type: String },
      trend: { type: String, enum: ['UP', 'DOWN', 'NONE', ''] },
      colourCode: { type: String, enum: ['GREEN', 'YELLOW', 'RED', ''] }
    }]
  }]
});

var DetailsReportSchema = new mongoose.Schema({
  key: { type: String, required: true },
  data: [{
    indicator: { type: String },
    values: [{ type: String }]
  }]
});

module.exports = {
  progressReport: {
    schema: ProgressReportSchema,
    model: mongoose.model('ProgressReport', ProgressReportSchema)
  },
  detailsReport: {
    schema: DetailsReportSchema,
    model: mongoose.model('DetailsReport', DetailsReportSchema)
  }
};
