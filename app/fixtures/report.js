/* global exports  */
/* global require  */

require('../models/report');

exports.Report = [{
  key: 'testReport',
  title: 'Report Title',
  data: [{
    title: 'Test Indicator',
    goal: 'A+',
    baseline: 'C',
    change: '+5%',
    trend: 'UP',
    colourCode: 'GREEN'
  }]
}];
