/* global require */
/* global module  */

var mongoose = require('mongoose');

var MapSchema = new mongoose.Schema({
  key: { type: String, required: true },
  features: [{
    type: { type: String },
    properties: {
      OBJECTID: {type: Number},
      DAUID: {type: String},
      NoEngFren_pct: {type: Number},
      low_income_pop_pct: {type: Number},
      low_income_seniors_pct: {type: Number},
      senoir_living_alone_pct: {type: Number},
      pop_livingalone_pct: {type: Number},
      Single_pct: {type: Number},
      Pop_2011: {type: Number},
      Seniors_pct: {type: Number},
      Older_seniors_pct: {type: Number},
      British_pct: {type: Number},
      French_pct: {type: Number},
      Eastern_European_pct: {type: Number},
      Northern_European_pct: {type: Number},
      Southern_European_pct: {type: Number},
      Western_European_pct: {type: Number},
      Jewish_pct: {type: Number},
      South_Asian_pct: {type: Number},
      EastSoutheast_Asian_pct: {type: Number},
      Western_Asian_pct: {type: Number},
      LatinCentral_American_pct: {type: Number},
      Caribbean_pct: {type: Number},
      Afrian_pct: {type: Number},
      Chinese_pct: {type: Number},
      Filipino_pct: {type: Number},
      German_pct: {type: Number},
      Dutch_pct: {type: Number},
      Russian_pct: {type: Number},
      Ukrainian_pct: {type: Number},
      Italian_pct: {type: Number},
      Portuguese_pct: {type: Number},
      Mexican_pct: {type: Number},
      Black_pct: {type: Number},
      Aboriginal_pct: {type: Number},
      Arab_or_pct: {type: Number},
      Buddhist_pct: {type: Number},
      Muslim_pct: {type: Number},
      Hindu_pct: {type: Number},
      Catholic_pct: {type: Number},
      United_pct: {type: Number},
      Orthodox_pct: {type: Number},
      Anglican_pct: {type: Number},
      Baptist_pct: {type: Number},
      Pentecostal_pct: {type: Number},
      Presbyterian_pct: {type: Number},
      OtherChristian_Pct: {type: Number},
      Lutheran_pct: {type: Number},
      No_degree_25_64_pct: {type: Number},
      FrenchLang_only_pct: {type: Number},
      Shape_Length: {type: Number},
      Shape_Area: {type: Number}
    },
    geometry: {
      type: {type: String},
      coordinates: [[[[{type: Number}]]]]
    }
  }]
});

module.exports = {
  schema: MapSchema,
  model: mongoose.model('Map', MapSchema)
};
