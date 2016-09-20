/* global require */
/* global module  */

var mongoose  = require('mongoose');

var barChart  = require('../models/chart').barChart.schema;
var lineChart = require('../models/chart').lineChart.schema;
var pieChart  = require('../models/chart').pieChart.schema;
var infoBox   = require('../models/infoBox').schema;
var scoreCard = require('../models/scoreCard').schema;

var PageSchema = new mongoose.Schema({
  key: { type: String, required: true },
  title: { type: String, required: true },
  barCharts: [barChart],
  lineCharts: [lineChart],
  pieCharts: [pieChart],
  infoBoxes: [infoBox],
  scoreCards: [{
    key: { type: String, required: true },
    title: { type: String, required: true },
    list: [scoreCard]
  }]
});

module.exports = {
  schema: PageSchema,
  model: mongoose.model('Page', PageSchema)
};
