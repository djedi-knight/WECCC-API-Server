/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'population-reach-demo-page',
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
  }, {
    key: 'registered-neighbours',
    title: 'Registered Neighbours',
    value: '0'
  }],
  scoreCards: [{
    key: 'priority-subgroup-1',
    title: 'Priority Subgroup',
    list: [{
      key: 'senior',
      title: 'Senior',
      score: '78',
      trend: 'UP'
    }, {
      key: 'disabled',
      title: 'Disabled',
      score: '10',
      trend: 'DOWN'
    }]
  }, {
    key: 'priority-subgroup-2',
    title: 'Priority Subgroup',
    list: [{
      key: 'senior',
      title: 'Senior',
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
      key: 'minimal',
      title: 'Minimal',
      score: '99',
      trend: 'SAME'
    }, {
      key: 'some',
      title: 'Some',
      score: '95',
      trend: 'DOWN'
    }, {
      key: 'high',
      title: 'High',
      score: '50',
      trend: 'UP'
    }, {
      key: 'late-stage',
      title: 'Late Stage',
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
      trend: 'SAME'
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
