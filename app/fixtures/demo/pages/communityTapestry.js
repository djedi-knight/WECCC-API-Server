/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'community-tapestry-demo-page',
  title: 'Community Tapestry',
  pieCharts: [{
    key: 'community-tapestry-pie-chart',
    data: [{
      x: 'Slice 1',
      y: 50.0,
      details: {
        key: 'slice-1-details-report',
        data: [{
          indicator: 'Indicator #1',
          values: ['5%', '20%']
        }, {
          indicator: 'Indicator #2',
          values: ['15%', '72%']
        }]
      }
    }, {
      x: 'Slice 2',
      y: 50.0,
      details: {
        key: 'slice-2-details-report',
        data: [{
          indicator: 'Indicator #1',
          values: ['25%', '80%']
        }, {
          indicator: 'Indicator #2',
          values: ['67%', '14%']
        }]
      }
    }, {
      x: 'Slice 3',
      y: 60.0,
      details: {
        key: 'slice-3-details-report',
        data: [{
          indicator: 'Indicator #1',
          values: ['27%', '86%']
        }, {
          indicator: 'Indicator #2',
          values: ['12%', '28%']
        }]
      }
    }, {
      x: 'Slice 4',
      y: 30.0,
      details: {
        key: 'slice-4-details-report',
        data: [{
          indicator: 'Indicator #1',
          values: ['2%', '29%']
        }, {
          indicator: 'Indicator #2',
          values: ['89%', '32%']
        }]
      }
    }, {
      x: 'Slice 5',
      y: 15.0,
      details: {
        key: 'slice-5-details-report',
        data: [{
          indicator: 'Indicator #1',
          values: ['71%', '49%']
        }, {
          indicator: 'Indicator #2',
          values: ['92%', '51%']
        }]
      }
    }, {
      x: 'Slice 6',
      y: 65.0,
      details: {
        key: 'slice-6-details-report',
        data: [{
          indicator: 'Indicator #1',
          values: ['81%', '88%']
        }, {
          indicator: 'Indicator #2',
          values: ['29%', '19%']
        }]
      }
    }, {
      x: 'Slice 7',
      y: 55.0,
      details: {
        key: 'slice-1-details-report',
        data: [{
          indicator: 'Indicator #1',
          values: ['33%', '93%']
        }, {
          indicator: 'Indicator #2',
          values: ['22%', '12%']
        }]
      }
    }, {
      x: 'Slice 8',
      y: 20.0,
      details: {
        key: 'slice-8-details-report',
        data: [{
          indicator: 'Indicator #1',
          values: ['11%', '87%']
        }, {
          indicator: 'Indicator #2',
          values: ['39%', '43%']
        }]
      }
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
