/* global exports  */
/* global require  */

require('../../../models/report');

exports.Report = [{
  key: 'progress-tracker-test-report',
  title: 'Progress Tracker',
  data: [{
    indicator: 'Income',
    goal: '5%',
    baseline: 'A',
    change: '-2%',
    trend: 'DOWN',
    colourCode: 'RED'
  }, {
    indicator: 'Age',
    goal: '21%',
    baseline: 'A',
    change: '+1%',
    trend: 'UP',
    colourCode: 'GREEN'
  }, {
    indicator: 'Education',
    goal: '4%',
    baseline: 'B',
    change: '+5%',
    trend: 'UP',
    colourCode: 'GREEN'
  }, {
    indicator: 'Air Pollution',
    goal: '16%',
    baseline: 'C',
    change: '-5%',
    trend: 'DOWN',
    colourCode: 'YELLOW'
  }, {
    indicator: 'Climate',
    goal: '--',
    baseline: '--',
    change: '--',
    trend: 'NONE',
    colourCode: 'GREEN'
  }, {
    indicator: 'Life Expectancy',
    goal: '100%',
    baseline: 'B',
    change: '-5%',
    trend: 'DOWN',
    colourCode: 'RED'
  }]
}];
