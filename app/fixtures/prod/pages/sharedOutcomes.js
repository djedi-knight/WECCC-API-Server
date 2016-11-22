/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'shared-outcomes-page',
  title: 'Shared Outcomes',
  infoBoxes: [{
    key: 'registered-caregivers',
    title: 'Registered Caregivers',
    value: '0'
  }],
  scoreCards: [{
    key: 'people-subgroup',
    title: 'People',
    list: [{
      key: 'health',
      title: 'Health',
      score: 'A-'
    }, {
      key: 'quality-of-life',
      title: 'Quality of Life',
      score: 'A'
    }, {
      key: 'experience',
      title: 'Experience',
      score: 'B+'
    }, {
      key: 'social-connection',
      title: 'Social Connection',
      score: 'C-'
    }]
  }, {
    key: 'care-partners-subgroup',
    title: 'Care Partners',
    list: [{
      key: 'quality-of-life',
      title: 'Quality of Life',
      score: 'C'
    }, {
      key: 'experience',
      title: 'Experience',
      score: 'A+'
    }, {
      key: 'social-connection',
      title: 'Social Connection',
      score: 'D-'
    }, {
      key: 'burden',
      title: 'Burden',
      score: '65.4'
    }]
  }, {
    key: 'neighbours-subgroup',
    title: 'Neighbours',
    list: [{
      key: 'quality-of-life',
      title: 'Quality of Life',
      score: 'A+'
    }, {
      key: 'social-connection',
      title: 'Social Connection',
      score: 'B'
    }]
  }]
}];
