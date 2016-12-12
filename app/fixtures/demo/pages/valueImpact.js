/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'value-impact-demo-page',
  title: 'Value And Impact',
  pieCharts: [{
    key: 'value-impact-pie-chart-1',
    data: [{
      x: 'Slice 1',
      y: 50
    }, {
      x: 'Slice 2',
      y: 50
    }, {
      x: 'Slice 3',
      y: 60
    }, {
      x: 'Slice 4',
      y: 30
    }, {
      x: 'Slice 5',
      y: 15
    }, {
      x: 'Slice 6',
      y: 65
    }, {
      x: 'Slice 7',
      y: 55
    }, {
      x: 'Slice 8',
      y: 20
    }, {
      x: 'Slice 1',
      y: 80
    }, {
      x: 'Slice 2',
      y: 20
    }, {
      x: 'Slice 3',
      y: 40
    }, {
      x: 'Slice 4',
      y: 60
    }]
  }],
  scoreCards: [{
    key: 'return-on-investment',
    title: 'Return on Investment',
    list: [{
      key: 'social',
      title: 'Social',
      score: '87',
      trend: 'UP'
    }, {
      key: 'economic',
      title: 'Economic',
      score: '110',
      trend: 'DOWN'
    }]
  }]
}];
