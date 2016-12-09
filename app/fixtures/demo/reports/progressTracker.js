/* global exports  */
/* global require  */

require('../../../models/report');

exports.ProgressReport = [{
  key: 'progress-tracker-demo-report',
  title: 'Progress Tracker',
  data: [{
    header: 'Quality of Life',
    rows: [{
      indicator: 'Self-reported Community Well-Being',
      goal: '5%',
      baseline: 'A',
      change: '-2%',
      trend: 'DOWN',
      colourCode: 'RED'
    }, {
      indicator: 'Self-reported Quality of Life for People Needing Care',
      goal: '21%',
      baseline: 'A',
      change: '1%',
      trend: 'UP',
      colourCode: 'GREEN'
    }, {
      indicator: 'Self-reported Quality of Life for Care Partners',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }]
  }, {
    header: 'Equity',
    rows: [{
      indicator: 'Equity of Access',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }, {
      indicator: 'Equity Across Population Groups',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }, {
      indicator: 'Equity Within Population Groups',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }]
  }, {
    header: 'Experience of Care',
    rows: [{
      indicator: 'Self-reported Experience of People Needing Care',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }, {
      indicator: 'Self-reported Experience of Care Partners',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }, {
      indicator: 'Care Partner Burden',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }]
  }, {
    header: 'Population Health',
    rows: [{
      indicator: 'Safety',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }, {
      indicator: 'Prevention',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }]
  }, {
    header: 'Per Capita Cost',
    rows: [{
      indicator: 'Population-level Cost/Resource Use',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }]
  }, {
    header: '',
    rows: [{
      indicator: '',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }, {
      indicator: '',
      goal: '',
      baseline: '',
      change: '',
      trend: '',
      colourCode: ''
    }]
  }]
}];
