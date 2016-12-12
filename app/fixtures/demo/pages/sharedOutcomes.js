/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'shared-outcomes-demo-page',
  title: 'Shared Outcomes',
  infoBoxes: [{
    key: 'registered-caregivers',
    title: 'Registered Caregivers',
    value: '1'
  }],
  scoreCards: [{
    key: 'people-subgroup',
    title: 'People',
    list: [{
      key: 'quality-of-life',
      title: 'Quality of Life',
      score: 'C+'
    }, {
      key: 'health',
      title: 'Health',
      score: 'FAIR'
    }, {
      key: 'experience',
      title: 'Experience',
      score: 'C+'
    }, {
      key: 'social-connection',
      title: 'Social Connection',
      score: 'C+'
    }]
  }, {
    key: 'care-partners-subgroup',
    title: 'Care Partners',
    list: [{
      key: 'quality-of-life',
      title: 'Quality of Life',
      score: 'B'
    }, {
      key: 'experience',
      title: 'Experience',
      score: 'B+'
    }, {
      key: 'social-connection',
      title: 'Social Connection',
      score: 'C+'
    }, {
      key: 'burden',
      title: 'Burden',
      score: 'SEVERE'
    }]
  }, {
    key: 'neighbours-subgroup',
    title: 'Neighbours',
    list: [{
      key: 'quality-of-life',
      title: 'Quality of Life',
      score: 'NA'
    }, {
      key: 'social-connection',
      title: 'Social Connection',
      score: 'NA'
    }]
  }]
}];
