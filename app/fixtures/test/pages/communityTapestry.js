/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'community-tapestry-test-page',
  title: 'Community Tapestry',
  pieCharts: [{
    key: 'community-tapestry-pie-chart',
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
