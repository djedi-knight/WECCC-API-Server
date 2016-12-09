/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'community-tapestry-demo-page',
  title: 'Community Tapestry',
  pieCharts: [{
    key: 'community-tapestry-pie-chart',
    data: [{
      x: 'Formal Care - Health',
      y: 50,
      details: {
        key: 'slice1-details-report',
        data: [{
          indicator: 'Primary Care',
          values: ['32%']
        }, {
          indicator: 'Home and Community Care',
          values: ['30%']
        }, {
          indicator: 'Rehabilitation',
          values: ['30%']
        }, {
          indicator: 'Residential Care',
          values: ['30%']
        }, {
          indicator: 'Hours of Care',
          values: ['30%']
        }, {
          indicator: 'Palliative Care',
          values: ['30%']
        }, {
          indicator: 'Mental Health',
          values: ['10%']
        }, {
          indicator: 'Hospital',
          values: ['12%']
        }]
      }
    }, {
      x: 'Formal Care - Social Services',
      y: 50,
      details: {
        key: 'slice2-details-report',
        data: [{
          indicator: 'Developmental Services',
          values: ['32%']
        }, {
          indicator: 'Other',
          values: ['30%']
        }]
      }
    }, {
      x: 'Formal Care - Volunteers',
      y: 20,
      details: {
        key: 'slice3-details-report',
        data: [{
          indicator: 'Hospice Volunteers',
          values: ['32%']
        }, {
          indicator: 'Trained Coaches',
          values: ['30%']
        }, {
          indicator: 'Other',
          values: ['10%']
        }]
      }
    }, {
      x: 'Formal Care - Paid Services',
      y: 50,
      details: {
        key: 'slice4-details-report',
        data: [{
          indicator: 'Home Health Care',
          values: ['5%']
        }, {
          indicator: 'Other',
          values: ['20%']
        }]
      }
    }, {
      x: 'Informal Care - Family',
      y: 30,
      details: {
        key: 'slice5-details-report',
        data: [{
          indicator: 'Immediate Family',
          values: ['25%']
        }, {
          indicator: 'Extended Family',
          values: ['80%']
        }]
      }
    }, {
      x: 'Informal Care - Friends',
      y: 60
    }, {
      x: 'Informal Care - Neighbours',
      y: 80,
      details: {
        key: 'slice7-details-report',
        data: [{
          indicator: 'Local',
          values: ['19%']
        }, {
          indicator: 'Groups',
          values: ['21%']
        }]
      }
    }, {
      x: 'Self Care - Self (Unaided)',
      y: 30
    }, {
      x: 'Self Care - Monitored',
      y: 30,
      details: {
        key: 'slice8-details-report',
        data: [{
          indicator: 'Sensors',
          values: ['76%']
        }, {
          indicator: 'Assistive Devices',
          values: ['54%']
        }]
      }
    }]
  }]
}];
