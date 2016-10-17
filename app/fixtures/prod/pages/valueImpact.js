/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'value-impact-page',
  title: 'Values and Impact',
  pieCharts: [{
    key: 'value-impact-pie-chart-1',
    data: [{
      x: 'Slice 1',
      y: 50.0
    }, {
      x: 'Slice 2',
      y: 50.0
    }, {
      x: 'Slice 3',
      y: 60.0
    }, {
      x: 'Slice 4',
      y: 30.0
    }, {
      x: 'Slice 5',
      y: 15.0
    }, {
      x: 'Slice 6',
      y: 65.0
    }, {
      x: 'Slice 7',
      y: 55.0
    }, {
      x: 'Slice 8',
      y: 20.0
    }]
  }, {
    key: 'value-impact-pie-chart-2',
    data: [{
      x: 'Slice 1',
      y: 80.0
    }, {
      x: 'Slice 2',
      y: 20.0
    }, {
      x: 'Slice 3',
      y: 40.0
    }, {
      x: 'Slice 4',
      y: 60.0
    }]
  }],
  scoreCards: [{
    key: 'return-on-investment',
    title: 'Return on Investment',
    list: [{
      key: 'social',
      title: 'Social',
      score: '78',
      trend: 'UP'
    }, {
      key: 'economic',
      title: 'Economic',
      score: '110',
      trend: 'DOWN'
    }]
  }]
}];
