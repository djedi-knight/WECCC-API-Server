/* global exports  */
/* global require  */

require('../../../models/report');

exports.ProgressReport = [{
  key: 'progress-tracker-demo-report',
  title: 'Progress Tracker',
  data: [{
    header: 'Quality of Life',
    rows: [{
      indicator: 'Self-Reported Community Well-Being',
      goal: '5%',
      baseline: 'A',
      change: '-2%',
      trend: 'DOWN',
      colourCode: 'RED'
    }, {
      indicator: 'Self-Reported Quality of Life of People Needing Care',
      goal: '21%',
      baseline: 'A',
      change: '+1%',
      trend: 'UP',
      colourCode: 'GREEN'
    }, {
      indicator: 'Self-Reported Quality of Life of Caregivers',
      goal: '4%',
      baseline: 'B',
      change: '+5%',
      trend: 'UP',
      colourCode: 'GREEN'
    }]
  }, {
    header: 'Equity',
    rows: [{
      indicator: 'Equity of Access',
      goal: '16%',
      baseline: 'C',
      change: '-5%',
      trend: 'DOWN',
      colourCode: 'YELLOW'
    }, {
      indicator: 'Equity Across Population Groups',
      goal: '--',
      baseline: '--',
      change: '--',
      trend: 'NONE',
      colourCode: 'GREEN'
    }, {
      indicator: 'Equity Within Population Groups',
      goal: '100%',
      baseline: 'B',
      change: '-5%',
      trend: 'DOWN',
      colourCode: 'RED'
    }]
  }, {
    header: 'Experience of Care',
    rows: [{
      indicator: 'Self-Reported Experience of People Needing Care',
      goal: '16%',
      baseline: 'C',
      change: '-5%',
      trend: 'DOWN',
      colourCode: 'YELLOW'
    }, {
      indicator: 'Self-Reported Experience of Care Partners',
      goal: '--',
      baseline: '--',
      change: '--',
      trend: 'NONE',
      colourCode: 'GREEN'
    }, {
      indicator: 'Care partner burden',
      goal: '100%',
      baseline: 'B',
      change: '-5%',
      trend: 'DOWN',
      colourCode: 'RED'
    }]
  }, {
    header: 'Population Health',
    rows: [{
      indicator: 'Safety',
      goal: '16%',
      baseline: 'C',
      change: '-5%',
      trend: 'DOWN',
      colourCode: 'YELLOW'
    }, {
      indicator: 'Prevention',
      goal: '--',
      baseline: '--',
      change: '--',
      trend: 'NONE',
      colourCode: 'GREEN'
    }]
  }, {
    header: 'Per Capita Cost',
    rows: [{
      indicator: 'Population-Level Cost/Resource Use',
      goal: '16%',
      baseline: 'C',
      change: '-5%',
      trend: 'DOWN',
      colourCode: 'YELLOW'
    }]
  }]
}];
