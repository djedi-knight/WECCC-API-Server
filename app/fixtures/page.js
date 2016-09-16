/* global exports  */
/* global require  */

require('../models/page');

exports.Page = [{
  key: 'testPage',
  title: 'Page Title',
  barCharts: [{
    key: 'testPageBarChart',
    data: [{
      title: 'Bar 1',
      value: 100
    }]
  }],
  lineCharts: [{
    key: 'testPageLineChart',
    data: [{
      title: 'Line 1',
      values: [{
        x: 0,
        y: 20
      }]
    }]
  }],
  pieCharts: [{
    key: 'testPagePieChart',
    data: [{
      title: 'Slice 1',
      value: 10
    }]
  }],
  infoBoxes: [{
    key: 'testPageInfoBox',
    title: 'Title',
    value: 'A'
  }],
  scoreCards: [{
    key: 'testPageScoreCard',
    title: 'Title',
    score: '8/10'
  }]
}];
