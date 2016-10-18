/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'community-pattern-page',
  title: 'Your Community Pattern',
  pieCharts: [{
    key: 'community-pattern-pie-chart-1',
    data: [{
      x: 'Slice 1',
      y: 50.0,
      details: {
        key: 'slice-1-details-report',
        data: [{
          name: 'Directed',
          general: '32%',
          subgroup: '30%'
        }, {
          name: 'Informal',
          general: '10%',
          subgroup: '15%'
        }]
      }
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
    key: 'community-pattern-pie-chart-2',
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
  }]
}];
