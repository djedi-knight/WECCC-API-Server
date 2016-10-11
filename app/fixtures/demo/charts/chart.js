/* global exports  */
/* global require  */

require('../../../models/chart');

exports.BarChart = [{
  key: 'demo-bar-chart',
  data: [{
    title: 'Bar 1',
    value: 100
  }]
}];

exports.LineChart = [{
  key: 'demo-line-chart',
  data: [{
    title: 'Line 1',
    values: [{
      x: 0,
      y: 20
    }]
  }]
}];

exports.PieChart = [{
  key: 'demo-pie-chart',
  data: [{
    title: 'Slice 1',
    value: 10
  }]
}];
