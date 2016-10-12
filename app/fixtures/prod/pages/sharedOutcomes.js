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
      key: 'quality-of-life',
      title: 'Quality of Life',
      score: 'A'
    }, {
      key: 'experience',
      title: 'Experience',
      score: 'B+'
    }, {
      key: 'expected',
      title: 'Expected',
      score: 'C-'
    }, {
      key: 'burden',
      title: 'Burden',
      score: '87.2'
    }]
  }, {
    key: 'core-partners-subgroup',
    title: 'Core Partners',
    list: [{
      key: 'quality-of-life',
      title: 'Quality of Life',
      score: 'C'
    }, {
      key: 'experience',
      title: 'Experience',
      score: 'A+'
    }, {
      key: 'expected',
      title: 'Expected',
      score: 'D-'
    }, {
      key: 'burden',
      title: 'Burden',
      score: '65.4'
    }]
  }]
}];
