/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'population-reach-page',
  title: 'Population Reach',
  infoBoxes: [{
    key: 'tab-1',
    title: 'Population',
    value: '28,000'
  }, {
    key: 'tab-2',
    title: 'Eligible',
    value: '6,000'
  }, {
    key: 'tab-3',
    title: 'Target',
    value: '1,500'
  }, {
    key: 'tab-4',
    title: 'Registered',
    value: '0'
  }, {
    key: 'registered-caregivers',
    title: 'Registered Caregivers',
    value: '0'
  }],
  scoreCards: [{
    key: 'priority-subgroup-1',
    title: 'Priority Subgroup',
    list: [{
      key: 'over-80',
      title: '80+',
      score: '78',
      trend: 'UP'
    }, {
      key: 'disabled',
      title: 'Disabled',
      score: '10',
      trend: 'DOWN'
    }]
  }, {
    key: 'dependency-subgroup-1',
    title: 'Dependency Level',
    list: [{
      key: 'light',
      title: 'Light',
      score: '111',
      trend: 'DOWN'
    }, {
      key: 'moderate',
      title: 'Moderate',
      score: '90',
      trend: 'UP'
    }, {
      key: 'complex',
      title: 'Complex',
      score: '20',
      trend: 'NONE'
    }, {
      key: 'eol',
      title: 'EOL',
      score: '0',
      trend: 'NONE'
    }]
  }, {
    key: 'registered-subgroup-1',
    title: 'Registed To',
    list: [{
      key: 'care',
      title: 'Care',
      score: '111',
      trend: 'UP'
    }, {
      key: 'outreach',
      title: 'Outreach',
      score: '90',
      trend: 'UP'
    }, {
      key: 'neighbourhood',
      title: 'Neighbourhood',
      score: '20',
      trend: 'DOWN'
    }]
  }, {
    key: 'priority-subgroup-2',
    title: 'Priority Subgroup',
    list: [{
      key: 'over-80',
      title: '80+',
      score: '68',
      trend: 'DOWN'
    }, {
      key: 'disabled',
      title: 'Disabled',
      score: '20',
      trend: 'UP'
    }]
  }, {
    key: 'dependency-subgroup-2',
    title: 'Dependency Level',
    list: [{
      key: 'light',
      title: 'Light',
      score: '99',
      trend: 'NONE'
    }, {
      key: 'moderate',
      title: 'Moderate',
      score: '95',
      trend: 'DOWN'
    }, {
      key: 'complex',
      title: 'Complex',
      score: '50',
      trend: 'UP'
    }, {
      key: 'eol',
      title: 'EOL',
      score: '20',
      trend: 'DOWN'
    }]
  }, {
    key: 'registered-subgroup-2',
    title: 'Registed To',
    list: [{
      key: 'care',
      title: 'Care',
      score: '100',
      trend: 'NONE'
    }, {
      key: 'outreach',
      title: 'Outreach',
      score: '95',
      trend: 'DOWN'
    }, {
      key: 'neighbourhood',
      title: 'Neighbourhood',
      score: '30',
      trend: 'UP'
    }]
  }]
}];
