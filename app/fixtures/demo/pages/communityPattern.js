/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'community-pattern-demo-page',
  title: 'Your Community Pattern',
  pieCharts: [{
    key: 'community-pattern-pie-chart-1',
    data: [{
      x: 'Self Help',
      y: 50.0,
      details: {
        key: 'self-help-details-report',
        data: [{
          indicator: 'Directed',
          values: ['32%', '30%']
        }, {
          indicator: 'Informal',
          values: ['10%', '12%']
        }]
      }
    }, {
      x: 'Social Groups',
      y: 45.0,
      details: {
        key: 'social-groups-details-report',
        data: [{
          indicator: 'Directed',
          values: ['19%', '45%']
        }, {
          indicator: 'Informal',
          values: ['16%', '32%']
        }]
      }
    }, {
      x: 'Family',
      y: 60.0,
      details: {
        key: 'family-details-report',
        data: [{
          indicator: 'Directed',
          values: ['64%', '10%']
        }, {
          indicator: 'Informal',
          values: ['20%', '33%']
        }]
      }
    }, {
      x: 'Friends',
      y: 25.0,
      details: {
        key: 'friends-details-report',
        data: [{
          indicator: 'Directed',
          values: ['14%', '80%']
        }, {
          indicator: 'Informal',
          values: ['27%', '18%']
        }]
      }
    }]
  }, {
    key: 'community-pattern-pie-chart-2',
    data: [{
      x: 'Self Help',
      y: 25.0,
      details: {
        key: 'self-help-details-report',
        data: [{
          indicator: 'Directed',
          values: ['12%', '44%']
        }, {
          indicator: 'Informal',
          values: ['87%', '45%']
        }]
      }
    }, {
      x: 'Social Groups',
      y: 20.0,
      details: {
        key: 'social-groups-details-report',
        data: [{
          indicator: 'Directed',
          values: ['14%', '10%']
        }, {
          indicator: 'Informal',
          values: ['20%', '25%']
        }]
      }
    }, {
      x: 'Family',
      y: 40.0,
      details: {
        key: 'family-details-report',
        data: [{
          indicator: 'Directed',
          values: ['25%', '18%']
        }, {
          indicator: 'Informal',
          values: ['67%', '12%']
        }]
      }
    }, {
      x: 'Friends',
      y: 10.0,
      details: {
        key: 'friends-details-report',
        data: [{
          indicator: 'Directed',
          values: ['10%', '40%']
        }, {
          indicator: 'Informal',
          values: ['80%', '12%']
        }]
      }
    }]
  }]
}];
