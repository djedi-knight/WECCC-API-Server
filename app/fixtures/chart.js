/* global exports  */
/* global require  */

require('../models/chart');

exports.BarChart = [{
  key: 'testBarChart',
  data: [{
    title: 'Bar 1',
    value: 100
  }]
}];

exports.LineChart = [{
  key: 'testLineChart',
  data: [{
    title: 'Line 1',
    values: [{
      x: 0,
      y: 20
    }]
  }]
}];

exports.PieChart = [{
  key: 'testPieChart',
  data: [{
    title: 'Slice 1',
    value: 10
  }]
}];
