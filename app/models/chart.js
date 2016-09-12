/* global require */
/* global module  */

var mongoose     = require('mongoose');

var BarChartSchema = new mongoose.Schema({
  key: { type: String, required: true, index: { unique: true } },
  data: [{
    title: { type: String },
    value: { type: Number }
  }]
});

var LineChartSchema = new mongoose.Schema({
  key: { type: String, required: true, index: { unique: true } },
  data: [{
    title: { type: String },
    values: [{
      x: { type: Number },
      y: { type: Number }
    }]
  }]
});

var PieChartSchema = new mongoose.Schema({
  key: { type: String, required: true, index: { unique: true } },
  data: [{
    title: { type: String },
    value: { type: Number }
  }]
});

module.exports = {
  barChart: {
    schema: BarChartSchema,
    model: mongoose.model('BarChart', BarChartSchema)
  },
  lineChart: {
    schema: LineChartSchema,
    model: mongoose.model('LineChart', LineChartSchema)
  },
  pieChart: {
    schema: PieChartSchema,
    model: mongoose.model('PieChart', PieChartSchema)
  }
};
