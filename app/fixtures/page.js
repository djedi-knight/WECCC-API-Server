/* global exports  */
/* global require  */

require('../models/page');

exports.Page = [{
  key: 'test-page',
  title: 'Page Title',
  emptyTabContent: 'Empty Tab Content',
  barCharts: [{
    key: 'testPageBarChart',
    data: [{
      title: 'Bar 1',
      value: 100
    }]
  }],
  lineCharts: [{
    key: 'testPageLineChart',
    data: [{
      title: 'Line 1',
      values: [{
        x: 0,
        y: 20
      }]
    }]
  }],
  pieCharts: [{
    key: 'testPagePieChart',
    data: [{
      title: 'Slice 1',
      value: 10
    }]
  }],
  infoBoxes: [{
    key: 'testPageInfoBox',
    title: 'Title',
    value: 'A'
  }],
  scoreCards: [{
    key: 'testPageScoreCardSubGroup',
    title: 'ScoreCard SubGroup Title',
    list: [{
      key: 'testPageScoreCard',
      title: 'Title',
      score: '8/10'
    }]
  }]
},


{
  key: 'population-reach-test-page',
  title: 'Population Reach',
  emptyTabContent: 'Please Select a Tab to Learn More',
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
    key: 'registered',
    title: 'Registered',
    value: '0'
  }],
  scoreCards: [{
    key: 'priority-subgroup',
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
    key: 'dependency-subgroup',
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
    key: 'registered-subgroup',
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
  }]
}];
