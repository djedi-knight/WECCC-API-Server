/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'population-reach-demo-page',
  title: 'Population Reach',
  infoBoxes: [{
    key: 'tab-1',
    title: 'Population',
    value: '28000'
  }, {
    key: 'tab-2',
    title: 'Eligible',
    value: '6000'
  }, {
    key: 'tab-3',
    title: 'Target',
    value: '1500'
  }, {
    key: 'tab-4',
    title: 'Registered',
    value: '17'
  }, {
    key: 'registered-caregivers',
    title: 'Registered Caregivers',
    value: '1'
  }, {
    key: 'registered-neighbours',
    title: 'Registered Neighbours',
    value: '0'
  }],
  scoreCards: [{
    key: 'priority-subgroup-1',
    title: 'Priority Subgroup',
    list: [{
      key: 'seniors',
      title: 'Seniors',
      score: '78'
    }, {
      key: 'disabled',
      title: 'Non-Senior Disabled',
      score: '10'
    }]
  }, {
    key: 'priority-subgroup-2',
    title: 'Priority Subgroup',
    list: [{
      key: 'seniors',
      title: 'Seniors',
      score: '4'
    }, {
      key: 'disabled',
      title: 'Non-Senior Disabled',
      score: '13'
    }]
  }, {
    key: 'dependency-subgroup-2',
    title: 'Dependency Level',
    list: [{
      key: 'minimal',
      title: 'Minimal',
      score: '3'
    }, {
      key: 'some',
      title: 'Some',
      score: '3'
    }, {
      key: 'high',
      title: 'High',
      score: '5'
    }, {
      key: 'late-stage',
      title: 'Late Stage',
      score: '6'
    }]
  }, {
    key: 'registered-subgroup-2',
    title: 'Registered To',
    list: [{
      key: 'care',
      title: 'Care',
      score: '17'
    }, {
      key: 'outreach',
      title: 'Outreach',
      score: '0'
    }, {
      key: 'neighbourhood',
      title: 'Neighbourhood',
      score: '0'
    }]
  }]
}];
