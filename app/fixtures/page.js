/* global exports  */
/* global require  */

require('../models/page');

exports.Page = [{
  key: 'test-page',
  title: 'Page Title',
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
      x: 'Slice 1',
      y: 10.0
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
},


{
  key: 'community-tapestry-test-page',
  title: 'Community Tapestry',
  pieCharts: [{
    key: 'community-tapestry-pie-chart',
    data: [{
      x: 'Slice 1',
      y: 50.0
    }, {
      x: 'Slice 2',
      y: 50.0
    }, {
      x: 'Slice 3',
      y: 60.0
    }, {
      x: 'Slice 4',
      y: 30.0
    }, {
      x: 'Slice 5',
      y: 15.0
    }, {
      x: 'Slice 6',
      y: 65.0
    }, {
      x: 'Slice 7',
      y: 55.0
    }, {
      x: 'Slice 8',
      y: 20.0
    }]
  }],
  scoreCards: [{
    key: 'return-on-investment',
    title: 'Return on Investment',
    list: [{
      key: 'social',
      title: 'Social',
      score: '78',
      trend: 'UP'
    }, {
      key: 'economic',
      title: 'Economic',
      score: '110',
      trend: 'DOWN'
    }]
  }]
},


{
  key: 'vital-signs-test-page',
  title: 'Vital Signs',
  scoreCards: [{
    key: 'vital-signs-subgroup',
    title: 'Vital Signs',
    list: [{
      key: 'government',
      title: 'Government',
      score: 'B+'
    }, {
      key: 'safety',
      title: 'Safety',
      score: 'D'
    }, {
      key: 'arts-culture',
      title: 'Arts & Culture',
      score: 'B'
    }, {
      key: 'transportation',
      title: 'Transportation',
      score: 'C-'
    }, {
      key: 'food-security',
      title: 'Food Security',
      score: 'B+'
    }]
  }, {
    key: 'self-reported-subgroup',
    title: 'Self-Reported',
    list: []
  }, {
    key: 'neighbourhood-subgroup',
    title: 'Neighbourhoods',
    list: []
  }]
}];
