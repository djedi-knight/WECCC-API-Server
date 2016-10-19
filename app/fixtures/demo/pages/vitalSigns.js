/* global exports  */
/* global require  */

require('../../../models/page');

exports.Page = [{
  key: 'vital-signs-demo-page',
  title: 'Vital Signs',
  scoreCards: [{
    key: 'vital-signs-subgroup',
    title: 'Vital Signs',
    list: [{
      key: 'government',
      title: 'Government',
      score: 'B+',
      trend: 'UP'
    }, {
      key: 'safety',
      title: 'Safety',
      score: 'D',
      trend: 'UP'
    }, {
      key: 'arts-culture',
      title: 'Arts & Culture',
      score: 'B',
      trend: 'DOWN'
    }, {
      key: 'transportation',
      title: 'Transportation',
      score: 'C-',
      trend: 'NONE'
    }, {
      key: 'food-security',
      title: 'Food Security',
      score: 'B+',
      trend: 'DOWN'
    }]
  }, {
    key: 'self-reported-subgroup',
    title: 'Self-Reported',
    list: [{
      key: 'government',
      title: 'Government',
      score: 'A+',
      trend: 'UP'
    }, {
      key: 'safety',
      title: 'Safety',
      score: 'C',
      trend: 'DOWN'
    }, {
      key: 'arts-culture',
      title: 'Arts & Culture',
      score: 'A',
      trend: 'UP'
    }, {
      key: 'transportation',
      title: 'Transportation',
      score: 'D',
      trend: 'DOWN'
    }, {
      key: 'food-security',
      title: 'Food Security',
      score: 'A+',
      trend: 'NONE'
    }]
  }]
}];
